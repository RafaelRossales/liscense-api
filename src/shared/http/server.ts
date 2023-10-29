import "reflect-metadata";
import "dotenv/config";
import { app } from "./app";
import { dataSource } from "./../../shared/infra/typeorm/";
import RequestBuilder from "@modules/http/RequestBuilder";

dataSource.initialize().then(() => {
  const server = app.listen(process.env.PORT || 3333, () => {
    console.log(`Server started on port ${process.env.PORT || 3333}! 🏆`);
    const request = new RequestBuilder()
      .setMethod("GET")
      .setUrl("https://jsonplaceholder.typicode.com/posts")
      .setHeaders({ "Content-Type": "application/json" })
      .build();

    request.send((response) => {
      // console.log(`Status: ${response.status}`);
      // console.log(`Status Text: ${response.statusText}`);
      // console.log(`Body: ${response.body}`);
    });
  });
});

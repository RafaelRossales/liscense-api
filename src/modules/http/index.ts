import RequestBuilder from "./RequestBuilder";

// Usage Example
const request = new RequestBuilder()
  .setMethod("POST")
  .setUrl("https://api.example.com/endpoint")
  .setHeaders({ "Content-Type": "application/json" })
  .setBody(JSON.stringify({ key: "value" }))
  .build();

request.send((response) => {
  console.log(`Status: ${response.status}`);
  console.log(`Status Text: ${response.statusText}`);
  console.log(`Body: ${response.body}`);
});

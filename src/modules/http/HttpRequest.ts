// HttpRequest.ts

import * as https from "https";
import RequestBuilder from "./RequestBuilder";
import HttpResponse from "./HttpResponse";

export default class HttpRequest {
  private method: string;
  private url: string;
  private headers: Record<string, string>;
  private body: string;

  constructor(builder: RequestBuilder) {
    this.method = builder["method"];
    this.url = builder["url"];
    this.headers = builder["headers"];
    this.body = builder["body"];
  }

  send(callback: (response: HttpResponse) => void): void {
    const options = {
      method: this.method,
      hostname: this.url.split("/")[2],
      path: `/${this.url.split("/").slice(3).join("/")}`,
      headers: this.headers,
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        callback(new HttpResponse(res.statusCode, res.statusMessage, data));
      });
    });

    req.on("error", (e) => {
      console.error(`Problem with request: ${e.message}`);
    });

    if (this.method !== "GET") {
      req.write(this.body);
    }

    req.end();
  }
}

import HttpRequest from "./HttpRequest";

// Builder Design Pattern
class RequestBuilder {
  private method: string = "GET";
  private url: string = "";
  private headers: Record<string, string> = {};
  private body: string = "";

  setMethod(method: string): RequestBuilder {
    this.method = method;
    return this;
  }

  setUrl(url: string): RequestBuilder {
    this.url = url;
    return this;
  }

  setHeaders(headers: Record<string, string>): RequestBuilder {
    this.headers = headers;
    return this;
  }

  setBody(body: string): RequestBuilder {
    this.body = body;
    return this;
  }

  build(): HttpRequest {
    return new HttpRequest(this);
  }
}
export default RequestBuilder;

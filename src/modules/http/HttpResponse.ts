class HttpResponse {
  constructor(
    public status: number,
    public statusText: string,
    public body: string
  ) {}
}

export default HttpResponse;

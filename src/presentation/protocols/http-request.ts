export type JSON = Record<string, unknown>;

export type HttpRequest = {
    body?: JSON;
    params?: JSON;
    query?: JSON;
}
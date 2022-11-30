import { Middleware } from "@/presentation/protocols";

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: any, res: any, next: any) => {
    const request = {
      ...(req.headers || {}),
      ...(req.body || {}),
      ...(req.query || {}),
    };
    const httpResponse = await middleware.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};

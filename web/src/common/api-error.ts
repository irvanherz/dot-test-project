import { AxiosError } from "axios";

export class ApiError extends Error {
  inner: Error | null;
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
    this.inner = null;
  }

  static fromError(error: unknown) {
    if (error instanceof ApiError) {
      return error;
    } else if (error instanceof AxiosError) {
      return new ApiError(error.response?.data?.message || error.message);
    } else if (error instanceof Error) {
      return new ApiError(error.message);
    } else if (typeof error === "string") {
      return new ApiError(error);
    } else if (error instanceof Object) {
      return new ApiError(JSON.stringify(error));
    } else {
      return new ApiError("An unknown error occurred");
    }
  }
}

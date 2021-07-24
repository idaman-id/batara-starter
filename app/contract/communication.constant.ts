
export const enum ResponseStatus
{
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  INVALID_DATA = "INVALID_DATA",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  UNAUTHENTICATE = "UNAUTHENTICATE",
  BAD_GATEWAY = "BAD_GATEWAY",
  REQUEST_TIMEOUT = "REQUEST_TIMEOUT"
}

export const enum ResponseMessage
{
  SUCCESS = "ok",
  ERROR = "error occured",
  INVALID_DATA = "invalid data",
  FORBIDDEN = "forbidden access",
  NOT_FOUND = "resource notfound",
  UNAUTHENTICATE = "unauthenticate access",
  BAD_GATEWAY = "bad gateway",
  REQUEST_TIMEOUT = "request timeout"
}

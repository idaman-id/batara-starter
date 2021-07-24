
import { ResponseData } from "../contract/response-data.type";
import { ResponseError } from "../contract/response-error.type";

import ResponseBodyEntity  from "../entity/response-body.entity";
import { ResponseMessage, ResponseStatus } from "../contract/communication.constant";
import { Factory } from "batara/dist/contract";

export default class ResponseBody implements Factory<ResponseBodyEntity<ResponseData, ResponseError>>
{

  /**
   * @description 
   * returning default response body entity according to the given status
   */
  public make(status: string)
  {
    if (status === ResponseStatus.SUCCESS) {
      return new ResponseBodyEntity({
        status: ResponseStatus.SUCCESS,
        message: ResponseMessage.SUCCESS,
      });
    }
    else if (status === ResponseStatus.BAD_GATEWAY) {
      return new ResponseBodyEntity({
        status: ResponseStatus.BAD_GATEWAY,
        message: ResponseMessage.BAD_GATEWAY,
      });
    }
    else if (status === ResponseStatus.FORBIDDEN) {
      return new ResponseBodyEntity({
        status: ResponseStatus.FORBIDDEN,
        message: ResponseMessage.FORBIDDEN,
      });
    }
    else if (status === ResponseStatus.INVALID_DATA) {
      return new ResponseBodyEntity({
        status: ResponseStatus.INVALID_DATA,
        message: ResponseMessage.INVALID_DATA,
      });
    }
    else if (status === ResponseStatus.NOT_FOUND) {
      return new ResponseBodyEntity({
        status: ResponseStatus.NOT_FOUND,
        message: ResponseMessage.NOT_FOUND,
      });
    }
    else if (status === ResponseStatus.REQUEST_TIMEOUT) {
      return new ResponseBodyEntity({
        status: ResponseStatus.REQUEST_TIMEOUT,
        message: ResponseMessage.REQUEST_TIMEOUT,
      });
    }
    else if (status === ResponseStatus.UNAUTHENTICATE) {
      return new ResponseBodyEntity({
        status: ResponseStatus.UNAUTHENTICATE,
        message: ResponseMessage.UNAUTHENTICATE,
      });
    }
    return new ResponseBodyEntity({
      status: ResponseStatus.ERROR,
      message: ResponseMessage.ERROR,
    });
  }

}

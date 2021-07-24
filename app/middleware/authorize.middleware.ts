
import { ResponseStatus, ResponseMessage } from "../contract/communication.constant";
import { Request, Response, NextFunction } from "batara/dist/router/http.interface";
import ResponseBody from "../entity/response-body.entity";
import Middleware from "batara/dist/middleware/middleware";

export default class Authorize extends Middleware
{

  handle(req: Request, res: Response, next: NextFunction)
  {
    const response = new ResponseBody({
      status: ResponseStatus.FORBIDDEN,
      message: ResponseMessage.FORBIDDEN
    });
    return res.status(403).json(response);
  }

}
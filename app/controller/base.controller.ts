
// import { ErrorType } from "batara/dist/constant";
// import { ResponseStatus } from "../contract/communication.constant";
// import { Request, Response, NextFunction } from "batara/dist/interface/http.interface";
// import ResponseBody from "../factory/response-body.factory";
import Controller from "batara/dist/controller/controller";

export default abstract class BaseController extends Controller
{

  // authorize(req: Request, res: Response, next: NextFunction): void
  // {
  //   return next();
  // }

  // authorizeHandler(err: any, req: Request, res: Response, next: NextFunction)
  // {
  //   if (!err || !err.type || err.type !== ErrorType.UNAUTHORIZE) {
  //     return next();
  //   }
  //   const response = new ResponseBody().make(ResponseStatus.FORBIDDEN);
  //   return res.status(403).json(response);
  // }

  // validationHandler(err: any, req: Request, res: Response, next: NextFunction)
  // {
  //   if (!err || !err.type || err.type !== ErrorType.VALIDATION) {
  //     return next();
  //   }
  //   const response = new ResponseBody().make(ResponseStatus.INVALID_DATA);
  //   response.setError(err.errors);
  //   return res.status(422).json(response);
  // }

}

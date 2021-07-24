
import { query } from "express-validator";

import { Request, Response, NextFunction } from 'batara/dist/router/http.interface';
import { UnauthorizeError, UnexpectedError } from "batara/dist/error";
import { ResponseMessage, ResponseStatus } from "../../contract/communication.constant";
import ResponseBody from "../../factory/response-body.factory";
import BaseController from "../base.controller";

export default class TestController extends BaseController
{

  // rules()
  // {
  //   return [
  //     query("app_id").not().isEmpty().withMessage("invalid_value"),
  //     query("custom_field").not().isEmpty().withMessage("custom_message"),
  //   ];
  // }

  // attributes()
  // {
  //   return {
  //     "id.custom_field": "Nama field kustom",
  //     "en.custom_field": "Custom field name",
  //   };
  // }

  // messages()
  // {
  //   return {
  //     "id.custom_message": ":attribute adalah pesan kesalahan kustom",
  //     "en.custom_message": ":attribute is a custom messages",
  //   };
  // }

  // authorize(req: Request, res: Response, next: NextFunction)
  // {
  //   let error = null;
  //   if (req.query.app_id === "invalid") {
  //     error = new UnauthorizeError(ResponseMessage.FORBIDDEN);
  //   }
  //   return next(error);
  // }

  static async handle(req: Request, res: Response)
  {
    try {
      if (req.query.app_id === "error") {
        throw new UnexpectedError(`Query is ${req.query.app_id}`);
      }
      const response = new ResponseBody().make(ResponseStatus.SUCCESS);
      response.setData(req.query);
      return res.status(200).json(response);
    } catch(err) {
      const response = new ResponseBody().make(ResponseStatus.ERROR);
      return res.status(400).json(response);
    }
  }

}

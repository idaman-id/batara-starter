
import { Request, Response } from 'batara/dist/interface/http.interface';
import { ResponseMessage, ResponseStatus } from "../../contract/communication.constant";
import ResponseBody from '../../entity/response-body.entity';
import BaseController from "../base.controller";

export default class ComponentController extends BaseController
{

  static async home(req: Request, res: Response)
  {
    const response = new ResponseBody({
      status: ResponseStatus.SUCCESS,
      message: ResponseMessage.SUCCESS
    });
    return res.status(200).json(response);
  }

  static async notFound(req: Request, res: Response)
  {
    const response = new ResponseBody({
      status: ResponseStatus.NOT_FOUND,
      message: ResponseMessage.NOT_FOUND
    });
    return res.status(404).json(response);
  }

}
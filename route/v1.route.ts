
import RouteItem from "batara/dist/router/route.interface";
import { HttpMethod } from "batara/dist/router/http.interface";
import TestController from "../app/controller/v1/test.controller";

export default class V1
{

  static routes(): Array<RouteItem>
  {
    return [
      {
        path: "/v1/test",
        method: HttpMethod.GET,
        handler: TestController.handle,
        middlewares: ["language", "validation"]
      },
    ];
  }

}

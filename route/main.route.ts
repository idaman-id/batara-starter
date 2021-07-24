
import { HttpMethod } from "batara/dist/router/http.interface";
import RouteItem from "batara/dist/router/route.interface";
import ComponentController from "../app/controller/component/component.controller";

export default class Main
{

  static routes(): Array<RouteItem>
  {
    return [
      {
        path: "/",
        method: HttpMethod.GET,
        handler: ComponentController.home
      },
    ];
  }

} 

import Api from "../../route/main.route";
import V1 from "../../route/v1.route";
import ComponentController from '../controller/component/component.controller';

import Route from "batara/dist/provider/route.provider";

export default class RouteProvider extends Route
{

  /** @override **/
  registerRoute() {}

  routes()
  {
    return [
      ...Api.routes(),
      ...V1.routes(),
    ];
  }

  errorHandler()
  {
    return ComponentController.notFound;
  }

}
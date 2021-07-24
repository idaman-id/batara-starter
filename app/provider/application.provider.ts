
import { config } from "../../config/application.config";
import { AccessLog } from "batara/dist/factory";
import App from "batara/dist/provider/application.provider";

export default class ApplicationProvider extends App
{

  registerApp()
  {
    const accessLog = new AccessLog().make({
      interval: config.log.access.interval,
      path: config.log.access.path
    });
    this.app.use(accessLog);
  }

}
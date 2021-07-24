
import Provider from "batara/dist/provider/provider";
import MiddlewareStorage from "batara/dist/middleware/middleware-storage.singleton";
import ValidationMiddleware from "batara/dist/middleware/validation.middleware";
import LanguageMiddleware from "batara/dist/middleware/language.middleware";
import AuthorizeMiddleware from "../middleware/authorize.middleware";

export default class MiddlewareProvider extends Provider
{

  register()
  {
    const storage = MiddlewareStorage.instance;
    storage.registerMiddleware("language", new LanguageMiddleware);
    storage.registerMiddleware("validation", new ValidationMiddleware);
    storage.registerMiddleware("authorize", new AuthorizeMiddleware);
  }

}

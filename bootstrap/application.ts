
import Application from 'batara/dist/entity/application.entity';
import ApplicationProvider from '../app/provider/application.provider';
import MiddlewareProvider from '../app/provider/middleware.provider';
import RouteProvider from '../app/provider/route.provider';
import { config } from '../config/application.config';

const app = new Application(config.application);
app.start();

const providers = [
  new ApplicationProvider(app),
  new MiddlewareProvider(app),
  new RouteProvider(app),
];
providers.forEach(provider => {
  provider.register();
});

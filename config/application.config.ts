/**
 * Application Configurations
 */

import { Environment } from "batara/dist/entity/environment.constant";

export const config = {
  application: {
    name: "service",
    version: "1.0",
    debug: true,
    environment: Environment.LOCAL,
    timezone: "+07:00",
    host: "localhost",
    port: 3000,
  },
  log: {
    access: {
      path: __dirname.replace("\\config", "").concat("\\storage\\log\\access"),
      interval: '1d'
    }
  }
};

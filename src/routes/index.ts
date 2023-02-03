import { Express, Router } from "express";

import main from "./main";
import person from "./person";
import payment from "./payment";
import attendance from "./attendance";

const api_url: string = <string>process.env.API;

export async function useRouter(app: Express) {
  //version 1

  const router = Router();

  //test
  router.use("/main", main);
  //person
  router.use("/person", person);
  //payment
  router.use("/payment", payment);
  //attendadce
  router.use("/attendanse", attendance);

  //cycle
  //cycle routes

  //person
  //person routes

  //attendadce
  //attendadce routes

  app.use(api_url, router);
}

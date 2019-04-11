import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin
} from "../controllers/userController";

import { onlyPublic } from "..middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic);
globalRouter.post(routes.join, onlyPublic, postLogin);

globalRouter.get(routes.login, onlyPublic);
globalRouter.post(routes.login, onlyPublic);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPublic);

export default globalRouter;

import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";

export const router = Router();

const modulesRoute = [
  {
    path: "/users",
    route: UserRoutes,
  },
];

modulesRoute.forEach((route) => {
  router.use(route.path, route.route);
});


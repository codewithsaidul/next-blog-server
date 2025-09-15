import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { PostRoutes } from "../modules/post/post.route";

export const router = Router();

const modulesRoute = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/post",
    route: PostRoutes,
  },
];

modulesRoute.forEach((route) => {
  router.use(route.path, route.route);
});


import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { PostRoutes } from "../modules/post/post.route";
import { AuthRoutes } from "../modules/auth/auth.route";

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
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

modulesRoute.forEach((route) => {
  router.use(route.path, route.route);
});


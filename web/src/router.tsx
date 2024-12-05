import { RouterProviderProps, createBrowserRouter } from "react-router-dom";
import { AdminHome } from "./pages/admin-home";
import { AdminPosts } from "./pages/admin-posts";
import { AuthSignin } from "./pages/auth-signin";
import { AuthSignup } from "./pages/auth-signup";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { PostDetail } from "./pages/post-detail";

const router: RouterProviderProps["router"] = createBrowserRouter([
  {
    id: "home",
    path: "/",
    element: <Home />,
  },
  {
    id: "post-detail",
    path: "/posts/:postId",
    element: <PostDetail />,
  },
  {
    id: "auth-signup",
    path: "/auth/signup",
    element: <AuthSignup />,
  },
  {
    id: "auth-signin",
    path: "/auth/signin",
    element: <AuthSignin />,
  },
  {
    id: "admin-home",
    path: "/admin",
    element: <AdminHome />,
  },
  {
    id: "admin-posts",
    path: "/admin/posts",
    element: <AdminPosts />,
  },
  {
    id: "not-found",
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

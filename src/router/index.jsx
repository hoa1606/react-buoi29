import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Template } from "../atomic/template/temlates";
import { SanPham } from "../atomic/page/sanPham";
import { GioHang } from "../atomic/page/giohang";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <SanPham />,
      },
      {
        path: "/giohang",
        element: <GioHang />,
      },
    ],
  },
]);

<RouterProvider router={router} />;

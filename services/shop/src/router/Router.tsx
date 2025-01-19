import { App } from "@/components/App/App";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: (
          <Suspense>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;

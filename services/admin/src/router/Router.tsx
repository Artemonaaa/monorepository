import { App } from "@/components/App/App";
import { About } from "@/pages/about";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routers);

export default routers;

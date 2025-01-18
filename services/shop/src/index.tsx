import { Suspense } from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "@/components/App/App";
import { Shop } from "@/pages/shop";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root not Found");
}

const container = createRoot(root);

const router = createBrowserRouter([
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
]);

container.render(<RouterProvider router={router} />);

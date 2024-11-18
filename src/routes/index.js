// src/routes/index.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages";
import MainLayout from "../layout/mainLayout";

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
      children: [
      ],
    },
  ];

  return useRoutes(routes);
}

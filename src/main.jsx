import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./pages/layouts/auth";
import Login from "./pages/auth/login/Index";
import Register from "./pages/auth/register/Index.jsx";
import DashboardLayout from "./pages/layouts/dashboard";
import Home from "./pages/dashboard/home/Index";
import Reservation from "./pages/dashboard/reservation/Index";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)

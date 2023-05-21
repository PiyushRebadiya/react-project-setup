import * as React from "react";
import { Routes, Route , Link, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Dashboard from "./pages/dashboard/index";
import './App.css';
import Header from "./component/header";
import NoMatch from "./pages/NoMatch";
import PublicRoute from "./component/route/public";
import PrivateRoute from "./component/route/private";

function App() {
  // localStorage.setItem('login', true);
  return (
    <div>
    <h1>Basic Example</h1>
    <p>
      This example demonstrates some of the core features of React Router
      including nested <code>&lt;Route&gt;</code>s,{" "}
      <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
      "*" route (aka "splat route") to render a "not found" page when someone
      visits an unrecognized URL.
    </p>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<PublicRoute component={Home} restricted={true} />} />
        <Route path="about" element={<PublicRoute component={About} restricted={true} />} />
        <Route path="dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="*"element={<NoMatch />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

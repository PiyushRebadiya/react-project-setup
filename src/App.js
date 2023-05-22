import * as React from "react";
import { Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Dashboard from "./pages/dashboard/index";
import "./App.css";
import Header from "./component/header";
import NoMatch from "./pages/NoMatch";
import PublicRoute from "./component/route/public";
import PrivateRoute from "./component/route/private";

function App() {
  // localStorage.setItem("login", true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={<PublicRoute component={Home} restricted={true} />}
            />
            <Route
              path="about"
              element={<PublicRoute component={About} restricted={true} />}
            />
            <Route
              path="dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import * as React from "react";
import { Routes, Route , Link } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Dashboard from "./pages/dashboard/index";
import './App.css';
import Header from "./component/header";
import NoMatch from "./pages/NoMatch";

function App() {
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

    {/* Routes nest inside one another. Nested route paths build upon
          parent route paths, and nested route elements render inside
          parent route elements. See the note about <Outlet> below. */}
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;

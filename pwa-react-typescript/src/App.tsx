import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Test = lazy(() => import("./Test"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/about" element={<About />} />

        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
    </Routes>
    </Suspense>
  </Router>
);

export default App;

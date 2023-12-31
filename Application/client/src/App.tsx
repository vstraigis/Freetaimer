import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import UsersPage from "./views/UsersPage";
import { Navbar } from "./components/components";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      {/* <Link to="/users">
        <button>Posts</button>
      </Link> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;

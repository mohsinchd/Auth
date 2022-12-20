import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Name from "./pages/Name";
import PrivateRoute from "./pages/PrivateRoute";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/name" element={<PrivateRoute />}>
          <Route path="/name" element={<Name />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

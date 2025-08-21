import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./dashbord/AdminDasbord.jsx";
import Home from "./components/Home.jsx";
import Files from "./components/AnswerKey.jsx";
import { Layout } from "./Layout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes inside Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="answerKey" element={<Files />} />
          <Route path="Sign_up" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="adminDashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

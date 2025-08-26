import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import { Layout } from "./Layout.jsx";
import Academics from "./components/Academics/Academics.jsx";
import Admission from "./components/Admission/Admission.jsx";
import Exam from "./components/Exam/Exam.jsx";
import ContactUsPage from "./components/Contact/Contact.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Login/Register.jsx";
import AdminDashboard from "./components/dashbord/AdminDasbord.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent layout */}
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="academics" element={<Academics />} />
          <Route path="admission" element={<Admission />} />
          <Route path="exams" element={<Exam />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="Sign_up" element={<Register />} />
          <Route path="adminLogin" element={<Login />} />
          <Route path="adminDashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

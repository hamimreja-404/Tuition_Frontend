import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import { Layout } from "./Layout.jsx";
import Academics from "./components/Academics/Academics.jsx";
import Admission from "./components/Admission/Admission.jsx";
import Exam from "./components/Exam/Exam.jsx";
import ContactUsPage from "./components/Contact/Contact.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Login/Register.jsx";
import AdminDashboard_1 from "./components/Admin/AdminControl.jsx";
import ProtectedRoute from "./components/Admin/ProtectedRoute.jsx";
import AddStudentForm from "./components/Exam/FromFillup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes WITH Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admission" element={<Admission />} />
          <Route path="exams" element={<Exam />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Route>

        {/* Routes WITHOUT Navbar and Footer */}
        <Route path="Sign_up" element={<Register />} />
        <Route path="adminLogin" element={<Login />} />
        
        {/* --- THIS IS THE CORRECTED ROUTE --- */}
        {/* It now has :examName and :examDate as placeholders */}
        <Route 
          path="/apply/:examName/:examDate" 
          element={<AddStudentForm />} 
        />

        {/* Protected Admin Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="adminDashboard" element={<AdminDashboard_1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  LayoutDashboard,
  Upload,
  FileText,
  CalendarPlus,
  Users,
  LogOut,
  X,
  Menu,
  PlusCircle,
  Trash2,
  Loader2, // Added for loading spinner icon
} from "lucide-react";
import axios from "axios";

// --- 1. Sidebar Component ---
// This component handles the navigation for the dashboard.
const AdminSidebar = ({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: "uploadAnswerKey",
      label: "Upload Answer Key",
      icon: <Upload size={20} />,
    },
    {
      id: "uploadMarksheet",
      label: "Upload Marksheet",
      icon: <FileText size={20} />,
    },
    {
      id: "upcomingExams",
      label: "Upcoming Exams",
      icon: <CalendarPlus size={20} />,
    },
    {
      id: "manageStudents",
      label: "Manage Students",
      icon: <Users size={20} />,
    },
  ];

  return (
    <aside
      className={`
      fixed top-0 left-0 h-full bg-slate-800 text-white z-20 
      transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      w-64 md:translate-x-0
    `}
    >
      <div className="p-6 border-b border-slate-700 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <p className="text-sm text-slate-400">The Physics Helper</p>
        </div>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden text-slate-400 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="px-4 mb-2">
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

// --- 2. Reusable File Upload Panel Component (For Answer Keys) ---
const UploadPanel = ({ type }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handlePublish = async () => {
    if (!title.trim() || !file) {
      toast.error(
        `Please provide a title and upload a PDF file for the ${type}.`
      );
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading(`Uploading ${type}...`);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}upload_files`,
        formData
      );
      if (result.data?.success || result.status === 201) {
        toast.success(`${type} published successfully!`, { id: toastId });
        setTitle("");
        setFile(null);
        document.getElementById(`file-input-${type}`).value = "";
      } else {
        toast.error(result.data?.message || `Failed to upload ${type}.`, {
          id: toastId,
        });
      }
    } catch (error) {
      console.error(`Upload error for ${type}:`, error.message);
      toast.error(`Failed to upload ${type}!`, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-slate-700">
        <Upload className="w-5 h-5" /> Upload {type}
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder={`Enter ${type} title...`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          disabled={isLoading}
        />
        <input
          id={`file-input-${type}`}
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          disabled={isLoading}
        />
        <button
          onClick={handlePublish}
          disabled={isLoading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center disabled:bg-indigo-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Publishing...
            </>
          ) : (
            `Publish ${type}`
          )}
        </button>
      </div>
    </div>
  );
};

// --- 3. Upcoming Exams Panel Component ---
const UpcomingExamsPanel = () => {
  const [examDetails, setExamDetails] = useState({
    title: "",
    eligibility: "",
    fee: "",
    appStartDate: "",
    appEndDate: "",
    examDate: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePublishExam = async () => {
    // Basic validation
    for (const key in examDetails) {
      if (!examDetails[key]) {
        toast.error(
          `Please fill in the ${key
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()} field.`
        );
        return;
      }
    }
    
    setIsLoading(true);
    const toastId = toast.loading("Publishing exam details...");
    
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}upload-Upcoming-Exam`,
        examDetails
      );
      if (result.data?.success || result.status === 201) {
        toast.success("Exam published successfully!", { id: toastId });
        setExamDetails({
          title: "",
          eligibility: "",
          fee: "",
          appStartDate: "",
          appEndDate: "",
          examDate: "",
        });
      } else {
        toast.error(result.data?.message || "Failed to publish exam.", { id: toastId });
      }
    } catch (error) {
      console.error("Publish exam error:", error);
      toast.error("Failed to publish exam!", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-6 text-slate-700">
        <CalendarPlus className="w-5 h-5" /> Add Upcoming Exam
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Exam Title"
          value={examDetails.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none md:col-span-2"
          disabled={isLoading}
        />
        <input
          type="text"
          name="eligibility"
          placeholder="Eligibility (e.g., Class XII)"
          value={examDetails.eligibility}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          disabled={isLoading}
        />
        <input
          type="number"
          name="fee"
          placeholder="Application Fee (INR)"
          value={examDetails.fee}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          disabled={isLoading}
        />
        <div>
          <label className="text-sm text-slate-500">
            Application Start Date
          </label>
          <input
            type="date"
            name="appStartDate"
            value={examDetails.appStartDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="text-sm text-slate-500">Application End Date</label>
          <input
            type="date"
            name="appEndDate"
            value={examDetails.appEndDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            disabled={isLoading}
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-500">Exam Date</label>
          <input
            type="date"
            name="examDate"
            value={examDetails.examDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            disabled={isLoading}
          />
        </div>
      </div>
      <button
        onClick={handlePublishExam}
        disabled={isLoading}
        className="w-full mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center disabled:bg-indigo-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Publishing...
          </>
        ) : (
          "Publish Exam"
        )}
      </button>
    </div>
  );
};

// --- 4. Upload Marksheet Panel Component ---
const UploadMarksheetPanel = () => {
  const [examTitle, setExamTitle] = useState("");
  const [students, setStudents] = useState([{ roll: "", marks: "" }]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleStudentChange = (index, event) => {
    const values = [...students];
    values[index][event.target.name] = event.target.value;
    setStudents(values);
  };

  const handleAddStudent = () => {
    setStudents([...students, { roll: "", marks: "" }]);
  };

  const handleRemoveStudent = (index) => {
    if (students.length > 1) {
      const values = [...students];
      values.splice(index, 1);
      setStudents(values);
    }
  };

  const handlePublishMarks = () => {
    if (!examTitle.trim()) {
      toast.error("Please provide an exam title.");
      return;
    }
    
    setIsLoading(true);
    const toastId = toast.loading("Publishing marksheet...");

    // NOTE: Replace this with your actual API call
    setTimeout(() => {
        try {
            console.log("Publishing Marksheet for:", examTitle, students);
            toast.success("Marksheet published successfully!", { id: toastId });
            setExamTitle("");
            setStudents([{ roll: "", marks: "" }]);
        } catch (error) {
            toast.error("Failed to publish marksheet.", { id: toastId });
        } finally {
            setIsLoading(false);
        }
    }, 1500); // Simulating network delay
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-slate-700">
        <FileText className="w-5 h-5" /> Upload Marksheet
      </h2>
      <input
        type="text"
        placeholder="Enter Exam Title (e.g., Mock Test 1)"
        value={examTitle}
        onChange={(e) => setExamTitle(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
        disabled={isLoading}
      />

      <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
        {students.map((student, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              name="roll"
              placeholder="Student Roll Number"
              value={student.roll}
              onChange={(e) => handleStudentChange(index, e)}
              className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              disabled={isLoading}
            />
            <input
              type="number"
              name="marks"
              placeholder="Marks Obtained"
              value={student.marks}
              onChange={(e) => handleStudentChange(index, e)}
              className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              disabled={isLoading}
            />
            <button
              onClick={() => handleRemoveStudent(index)}
              className="p-2 text-red-500 hover:bg-red-100 rounded-full disabled:opacity-50"
              disabled={students.length === 1 || isLoading}
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddStudent}
        className="flex items-center gap-2 text-sm text-indigo-600 font-medium mt-4 hover:text-indigo-800 disabled:text-slate-400"
        disabled={isLoading}
      >
        <PlusCircle size={16} /> Add Another Student
      </button>
      <button
        onClick={handlePublishMarks}
        disabled={isLoading}
        className="w-full mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center disabled:bg-indigo-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Publishing...
          </>
        ) : (
          "Publish Marksheet"
        )}
      </button>
    </div>
  );
};

// --- 5. Manage Students Panel Component ---
const ManageStudentsPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-slate-700">
        <Users className="w-5 h-5" /> Manage Students
      </h2>
      <p className="text-slate-500">
        Form to add, view, or remove students will go here.
      </p>
    </div>
  );
};

// --- 6. Dashboard Overview Panel Component ---
const DashboardPanel = ({ visitorCount }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-slate-700 mb-4">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-indigo-100 p-4 rounded-lg text-center">
          <p className="text-3xl font-bold text-indigo-600">{visitorCount}</p>
          <p className="text-sm font-medium text-indigo-500">Total Visitors</p>
        </div>
      </div>
    </div>
  );
};

// --- 7. Main Admin Dashboard Component ---
export default function AdminDashboard_1() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [adminName] = useState("Arghya");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const fetchVisitor = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}visitor-count`);
        const data = await res.json();
        if (data.success) {
          setVisitorCount(data.count);
          console.log("Visitor count fetched:", data.count);
        } else {
          console.error("API call was not successful:", data);
          setVisitorCount(0); // Set to 0 on API error
        }
      } catch (err) {
        console.error("Error fetching files:", err);
        setVisitorCount(0); // Ensure files are 0 on fetch failure
      }
    };
    fetchVisitor();
  }, []);
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPanel visitorCount={visitorCount} />;
      case "uploadAnswerKey":
        return <UploadPanel type="Answer Key" />;
      case "uploadMarksheet":
        return <UploadMarksheetPanel />;
      case "upcomingExams":
        return <UpcomingExamsPanel />;
      case "manageStudents":
        return <ManageStudentsPanel />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Toaster position="top-right" reverseOrder={false} />
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="md:ml-64 transition-all duration-300">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden mr-4 text-slate-600"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">
              Welcome, {adminName}
            </h1>
          </div>
          <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-semibold text-sm">
            Visitors: {visitorCount}
          </span>
        </header>
        <div className="p-6">{renderContent()}</div>
      </main>
    </div>
  );
}

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Upload, Users } from "lucide-react";
import axios from "axios";
export default function AdminDashboard() {
  const [visitorCount] = useState(2); // Example count
  const [adminName] = useState("Admin Arghya Physics");

  const [activeTab, setActiveTab] = useState("upload");

  // Upload States
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadFile, setUploadFile] = useState(null);

  // Student States
  const [studentRoll, setStudentRoll] = useState("");
  const [studentList, setStudentList] = useState([]);

  // Handle File Upload
  const handleUploadPublish = async () => {
    console.log("Uploading file:", uploadFile);
    console.log("With title:", uploadTitle);
    if (!uploadTitle.trim() || !uploadFile) {
      toast.error("Please provide a title and upload a PDF file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", uploadTitle);
      formData.append("file", uploadFile);

      console.log("Form data prepared:", formData);
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}upload_files`,
        formData,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );

      if (
        result.data?.status === "ok" ||
        result.data?.success ||
        result.status === 201
      ) {
        toast.success("Document published successfully!");
        setUploadTitle("");
        setUploadFile(null);
      } else {
        toast.error(result.data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Upload error:", error.message);
      toast.error("Failed to upload document!");
    }
  };

  // Add Student
  const handleAddStudent = () => {
    if (!studentRoll.trim()) {
      toast.error("Enter a valid roll number!");
      return;
    }
    setStudentList([...studentList, studentRoll.trim()]);
    setStudentRoll("");
    toast.success("Student added!");
  };

  const handlePublishStudents = () => {
    if (studentList.length === 0) {
      toast.error("Add at least one student before publishing!");
      return;
    }
    toast.success("Like This Way You Can Add Students!!!");
    setStudentList([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-14">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{adminName}'s Dashboard</h1>
        <span className="bg-white text-blue-600 px-3 py-1 rounded-full shadow">
          Visitors: {visitorCount}
        </span>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md flex justify-center gap-6 py-3">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "upload"
              ? "bg-blue-500 text-white shadow"
              : "text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("upload")}
        >
          Upload Document
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "students"
              ? "bg-blue-500 text-white shadow"
              : "text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("students")}
        >
          Add Students
        </button>
      </nav>

      {/* Main Section */}
      <div className="p-6">
        {activeTab === "upload" && (
          <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Upload className="w-5 h-5" /> Upload Document
            </h2>
            <input
              type="text"
              placeholder="Enter document title..."
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="file"
              accept="application/pdf"
              className="mb-3"
              onChange={(e) => setUploadFile(e.target.files[0])}
            />
            <button
              onClick={handleUploadPublish}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Publish
            </button>
          </div>
        )}

        {activeTab === "students" && (
          <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Users className="w-5 h-5" /> Add Students
            </h2>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Enter Roll Number"
                value={studentRoll}
                onChange={(e) => setStudentRoll(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleAddStudent}
                className="bg-green-500 hover:bg-green-600 text-white px-3 rounded-lg transition"
              >
                +
              </button>
            </div>
            <ul className="list-disc list-inside mb-3 text-gray-700">
              {studentList.map((roll, i) => (
                <li key={i}>{roll}</li>
              ))}
            </ul>
            <button
              onClick={handlePublishStudents}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Publish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

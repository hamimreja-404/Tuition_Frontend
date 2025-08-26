// import React, { useEffect, useState } from "react";

// export default function Files() {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(true); // ✅ loading state

//   // Fetch files from backend
//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}get_files`);
//         const data = await res.json();
//         if (data.success) {
//           setFiles(data.data); // ApiResponse => data
//         }
//       } catch (err) {
//         console.error("Error fetching files:", err);
//       } finally {
//         setLoading(false); // ✅ stop loading
//       }
//     };
//     fetchFiles();
//   }, []);

//   const handleDownload = (url, filename) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = filename || "download"; // fallback filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl my-6 font-bold text-center">
//           <span className="bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
//             Answer Keys
//           </span>
//         </h2>

//         {/* Grid for cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {loading ? (
//             // ✅ Loading Animation
//             <div className="col-span-full flex justify-center items-center py-16">
//               <div className="flex space-x-2">
//                 <div className="w-4 h-4 bg-purple-700 rounded-full animate-bounce"></div>
//                 <div className="w-4 h-4 bg-indigo-700 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
//                 <div className="w-4 h-4 bg-purple-900 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
//               </div>
//               <span className="ml-3 text-lg text-gray-700 font-medium">
//                 Loading Files...
//               </span>
//             </div>
//           ) : files.length > 0 ? (
//             files.map((file) => (
//               <div
//                 key={file._id}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
//               >
//                 {/* File Info */}
//                 <div className="p-5 flex flex-col flex-grow">
//                   <h3 className="text-lg font-semibold mb-3 truncate">
//                     {file.title || "Untitled File"}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-4">
//                     Uploaded on{" "}
//                     {new Date(file.createdAt).toLocaleDateString()}
//                   </p>

//                   {/* Download Button */}
//                   <button
//                     onClick={() => handleDownload(file.path, file.title)}
//                     className="mt-auto bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
//                   >
//                     ⬇️ Download
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             // ✅ No File Found
//             <p className="text-center text-gray-600 font-medium col-span-full py-10">
//               🚫 No files found
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Download, FileText, XCircle } from 'lucide-react';

// --- Main Component for Answer Keys ---
export default function AnswerKeySection() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch files from your backend
  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        // Fetching data from the API
        const res = await fetch(`${import.meta.env.VITE_API_URL}get_files`);
        const data = await res.json();
        if (data.success) {
          setFiles(data.data);
        } else {
          console.error("API call was not successful:", data);
          setFiles([]); // Set to empty array on API error
        }
      } catch (err) {
        console.error("Error fetching files:", err);
        setFiles([]); // Ensure files are empty on fetch failure
      } finally {
        setLoading(false);
      }
    };
    fetchFiles();
  }, []);

  const handleDownload = (url, filename) => {
    if (!url || url === '#') {
        // Using a more modern approach like a custom modal would be better than alert
        // but for simplicity, alert is used here as a placeholder.
        alert('Download link is not available.');
        return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.download = filename || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Previous Mock Test <span className="text-indigo-600">Answer Keys</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Review the solutions from our past mock tests to analyze your performance and strengthen your concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading ? (
            // Skeleton Loader
            Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
          ) : files.length > 0 ? (
            // File Cards
            files.map((file) => (
              <FileCard key={file._id} file={file} onDownload={handleDownload} />
            ))
          ) : (
            // No Files Message
            <NoFilesMessage />
          )}
        </div>
      </div>
    </div>
  );
}

// --- Reusable UI Components ---

const FileCard = ({ file, onDownload }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group border border-slate-200">
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex justify-center mb-4">
        <FileText className="w-16 h-16 text-indigo-200 group-hover:text-indigo-500 transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center h-20">
        {file.title || "Untitled File"}
      </h3>
      <p className="text-sm text-slate-500 mb-6 text-center">
        Uploaded on {new Date(file.createdAt).toLocaleDateString()}
      </p>
      <button
        onClick={() => onDownload(file.path, file.title)}
        className="mt-auto w-full flex items-center justify-center bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-all duration-300 transform group-hover:scale-105"
      >
        <Download size={16} className="mr-2" />
        Download
      </button>
    </div>
  </div>
);

const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 animate-pulse">
    <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4"></div>
    <div className="h-6 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
    <div className="h-6 bg-slate-200 rounded w-1/2 mx-auto mb-4"></div>
    <div className="h-4 bg-slate-200 rounded w-1/3 mx-auto mb-6"></div>
    <div className="h-10 bg-slate-300 rounded-lg w-full"></div>
  </div>
);

const NoFilesMessage = () => (
    <div className="col-span-full bg-white rounded-lg shadow-sm p-10 text-center border border-dashed border-slate-300">
        <XCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-700">No Answer Keys Found</h3>
        <p className="text-slate-500 mt-2">New answer keys will be uploaded here after each mock test. Please check back later.</p>
    </div>
);

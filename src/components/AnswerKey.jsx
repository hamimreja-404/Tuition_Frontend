// // src/components/Files.jsx
// import React, { useEffect, useState } from "react";

// export default function Files() {
//   const [files, setFiles] = useState([]);

//   // Fetch files from backend
//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const res = await fetch( `${import.meta.env.VITE_API_URL}get_files`,); 
//         const data = await res.json();
//         if (data.success) {
//           setFiles(data.data); // ApiResponse => data
//         }
//       } catch (err) {
//         console.error("Error fetching files:", err);
//       }
//     };
//     fetchFiles();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#FFF9F4] py-12 px-6 mt-10">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center font-serif italic">
//           📂 Available Files
//         </h2>

//         {/* Grid for cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {files.length > 0 ? (
//             files.map((file) => (
//               <div
//                 key={file._id}
//                 className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
//               >
//                 <h3 className="text-lg font-semibold mb-3 truncate">
//                   {file.title || "Untitled File"}
//                 </h3>
//                 <button
//                   onClick={() => window.open(file.path, "_blank")}
//                   className="mt-auto bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
//                 >
//                   ⬇️ Download
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-600 col-span-full">
//               No files available.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/Files.jsx
import React, { useEffect, useState } from "react";

export default function Files() {
  const [files, setFiles] = useState([]);

  // Fetch files from backend
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await await fetch( `${import.meta.env.VITE_API_URL}get_files`); 
        const data = await res.json();
        if (data.success) {
          setFiles(data.data); // ApiResponse => data
        }
      } catch (err) {
        console.error("Error fetching files:", err);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F4] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif italic">
          📂 Available Files
        </h2>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {files.length > 0 ? (
            files.map((file) => (
              <div
                key={file._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                {/* Preview PDF */}
                <div className="h-56 w-full border-b">
                  <embed
                    src={file.path}
                    type="application/pdf"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* File Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3 truncate">
                    {file.title || "Untitled File"}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Uploaded on {new Date(file.createdAt).toLocaleDateString()}
                  </p>

                  <button
                    onClick={() => window.open(file.path, "_blank")}
                    className="mt-auto bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                  >
                    ⬇️ Download
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No files available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

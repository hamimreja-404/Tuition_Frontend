// import React, { useState, useEffect } from 'react';
// import { Edit, Calendar, Clock, Loader2 } from 'lucide-react';
// import axios from 'axios';
// import { Toaster, toast } from 'react-hot-toast';

// // --- Apply for Upcoming Exams Section Component ---
// export default function ApplyForExamSection() {
//   const [upcomingExams, setUpcomingExams] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchExams = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_URL}get-Upcoming-Exams`);
//         if (response.data && response.data.data) {
//           setUpcomingExams(response.data.data);
//         } else {
//           toast.error("Could not fetch exam data.");
//           setUpcomingExams([]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch exams:", error);
//         toast.error("An error occurred while fetching exams.");
//         setUpcomingExams([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchExams();
//   }, []);

//   return (
//     <section className="bg-slate-50 py-16 md:py-24">
//       <Toaster position="top-right" />
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
//             Apply for <span className="text-indigo-600">Upcoming Exams</span>
//           </h2>
//           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//             Register for our upcoming mock tests and practice exams to benchmark your preparation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {isLoading ? (
//             // Show skeleton loaders while fetching data
//             Array.from({ length: 3 }).map((_, index) => <ExamCardSkeleton key={index} />)
//           ) : upcomingExams.length > 0 ? (
//             // Show exam cards once data is fetched
//             upcomingExams.map((exam) => (
//               <ExamCard key={exam._id} exam={exam} />
//             ))
//           ) : (
//             // Show a message if no exams are available
//             <p className="text-center text-slate-500 md:col-span-2 lg:col-span-3">
//               There are no upcoming exams scheduled at the moment. Please check back later!
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// // --- Reusable Exam Card Component ---
// const ExamCard = ({ exam }) => {
//   // Dynamically determine if registration is open by comparing dates
//   const isRegistrationOpen = new Date(exam.appEndDate) >= new Date();

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-GB', { 
//         day: 'numeric', 
//         month: 'long', 
//         year: 'numeric' 
//     });
//   };

//   return (
//     <div className={`
//       bg-white border rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 
//       flex flex-col p-6 group
//       ${isRegistrationOpen ? 'border-slate-200' : 'border-slate-100 bg-slate-50'}
//     `}>
//       <div className="flex items-center mb-4">
//         <div className={`p-3 rounded-full ${isRegistrationOpen ? 'bg-indigo-100' : 'bg-slate-200'}`}>
//           <Edit className={`w-6 h-6 ${isRegistrationOpen ? 'text-indigo-600' : 'text-slate-500'}`} />
//         </div>
//         <h3 className={`text-xl font-bold ml-4 ${isRegistrationOpen ? 'text-slate-800' : 'text-slate-500'}`}>
//           {exam.title}
//         </h3>
//       </div>
      
//       <div className="space-y-3 text-sm text-slate-600 mb-6 flex-grow">
//         <div className="flex items-center">
//             <Calendar size={16} className="mr-3 text-slate-400"/>
//             <span><strong>Exam Date:</strong> {formatDate(exam.examDate)}</span>
//         </div>
//         <div className="flex items-center">
//             <Clock size={16} className="mr-3 text-slate-400"/>
//             <span><strong>Registration Closes:</strong> {formatDate(exam.appEndDate)}</span>
//         </div>
//       </div>

//       <button
//         disabled={!isRegistrationOpen}
//         className={`
//           mt-auto w-full text-center px-5 py-3 rounded-lg font-semibold transition-all duration-300
//           ${isRegistrationOpen 
//             ? 'bg-indigo-500 text-white hover:bg-indigo-600 transform group-hover:scale-105' 
//             : 'bg-slate-300 text-slate-500 cursor-not-allowed'
//           }
//         `}
//       >
//         {isRegistrationOpen ? 'Apply Now' : 'Registration Closed'}
//       </button>
//     </div>
//   );
// };

// // --- Skeleton Loader for Exam Card ---
// const ExamCardSkeleton = () => (
//   <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 animate-pulse">
//     <div className="flex items-center mb-4">
//       <div className="p-3 rounded-full bg-slate-200">
//         <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
//       </div>
//       <div className="h-6 bg-slate-300 rounded-md w-3/4 ml-4"></div>
//     </div>
//     <div className="space-y-3 mb-6">
//       <div className="h-4 bg-slate-200 rounded-md w-full"></div>
//       <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
//     </div>
//     <div className="h-12 bg-slate-300 rounded-lg mt-auto"></div>
//   </div>
// );


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Edit, Calendar, Clock, Loader2 } from 'lucide-react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

// --- Apply for Upcoming Exams Section Component ---
export default function ApplyForExamSection() {
  const [upcomingExams, setUpcomingExams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}get-Upcoming-Exams`);
        if (response.data && response.data.data) {
          setUpcomingExams(response.data.data);
        } else {
          toast.error("Could not fetch exam data.");
          setUpcomingExams([]);
        }
      } catch (error) {
        console.error("Failed to fetch exams:", error);
        toast.error("An error occurred while fetching exams.");
        setUpcomingExams([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExams();
  }, []);

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Apply for <span className="text-indigo-600">Upcoming Exams</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Register for our upcoming mock tests and practice exams to benchmark your preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {isLoading ? (
            // Show skeleton loaders while fetching data
            Array.from({ length: 3 }).map((_, index) => <ExamCardSkeleton key={index} />)
          ) : upcomingExams.length > 0 ? (
            // Show exam cards once data is fetched
            upcomingExams.map((exam) => (
              <ExamCard key={exam._id} exam={exam} />
            ))
          ) : (
            // Show a message if no exams are available
            <div className="col-span-full text-center bg-white p-10 rounded-xl shadow-sm">
                <p className="text-slate-500">There are no upcoming exams scheduled at the moment. Please check back later!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// --- Reusable Exam Card Component ---
const ExamCard = ({ exam }) => {
  // Dynamically determine if registration is open by comparing dates
  const isRegistrationOpen = new Date(exam.appEndDate) >= new Date();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
  };

  // Format the date for the URL (YYYY-MM-DD)
  const examDateForUrl = new Date(exam.examDate).toISOString().split('T')[0];

  return (
    <div className={`
      bg-white border rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 
      flex flex-col p-6 group
      ${isRegistrationOpen ? 'border-slate-200' : 'border-slate-100 bg-slate-50'}
    `}>
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${isRegistrationOpen ? 'bg-indigo-100' : 'bg-slate-200'}`}>
          <Edit className={`w-6 h-6 ${isRegistrationOpen ? 'text-indigo-600' : 'text-slate-500'}`} />
        </div>
        <h3 className={`text-xl font-bold ml-4 ${isRegistrationOpen ? 'text-slate-800' : 'text-slate-500'}`}>
          {exam.title}
        </h3>
      </div>
      
      <div className="space-y-3 text-sm text-slate-600 mb-6 flex-grow">
        <div className="flex items-center">
            <Calendar size={16} className="mr-3 text-slate-400"/>
            <span><strong>Exam Date:</strong> {formatDate(exam.examDate)}</span>
        </div>
        <div className="flex items-center">
            <Clock size={16} className="mr-3 text-slate-400"/>
            <span><strong>Registration Closes:</strong> {formatDate(exam.appEndDate)}</span>
        </div>
      </div>

      {/* --- This is now a Link component --- */}
      <Link
        // Construct the URL with encoded parameters
        to={`/apply/${encodeURIComponent(exam.title)}/${encodeURIComponent(examDateForUrl)}`}
        // Apply button styles
        className={`
          mt-auto w-full text-center px-5 py-3 rounded-lg font-semibold transition-all duration-300
          ${isRegistrationOpen 
            ? 'bg-indigo-500 text-white hover:bg-indigo-600 transform group-hover:scale-105' 
            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
          }
        `}
        // This prevents navigation if the link is "disabled"
        onClick={(e) => {
          if (!isRegistrationOpen) {
            e.preventDefault();
          }
        }}
      >
        {isRegistrationOpen ? 'Apply Now' : 'Registration Closed'}
      </Link>
    </div>
  );
};

// --- Skeleton Loader for Exam Card ---
const ExamCardSkeleton = () => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 animate-pulse">
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-full bg-slate-200">
        <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
      </div>
      <div className="h-6 bg-slate-300 rounded-md w-3/4 ml-4"></div>
    </div>
    <div className="space-y-3 mb-6">
      <div className="h-4 bg-slate-200 rounded-md w-full"></div>
      <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
    </div>
    <div className="h-12 bg-slate-300 rounded-lg mt-auto"></div>
  </div>
);

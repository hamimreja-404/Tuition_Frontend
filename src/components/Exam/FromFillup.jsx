// import React, { useState, useEffect } from 'react';
// import { Toaster, toast } from 'react-hot-toast';
// import axios from 'axios';
// import { User, Calendar, Mail, Book, BookCopy, Loader2, Send, Upload, AlertCircle, Edit } from 'lucide-react';
// import { useParams } from 'react-router-dom';

// // --- Main Form Component ---
// export default function AddStudentForm() {
//   const { examName: examNameFromUrl, examDate: examDateFromUrl } = useParams();

//   // State to hold form data
//   const [formData, setFormData] = useState({
//     fullName: '',
//     DOB: '',
//     email: '',
//     className: '',
//     examName: '',
//     examDate: '',
//   });

//   const [paymentScreenshot, setPaymentScreenshot] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isExamEditable, setIsExamEditable] = useState(false); // State to control if exam fields are editable

//   useEffect(() => {
//     if (examNameFromUrl && examDateFromUrl) {
//       setFormData(prevData => ({
//         ...prevData,
//         examName: decodeURIComponent(examNameFromUrl),
//         examDate: decodeURIComponent(examDateFromUrl),
//       }));
//     }
//   }, [examNameFromUrl, examDateFromUrl]);

//   // Handle input changes and update state
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setPaymentScreenshot(e.target.files[0]);
//   };

//   // --- Function to show confirmation toast ---
//   const handleEditConfirm = () => {
//     toast((t) => (
//       <div className="flex flex-col items-center text-center p-2">
//         <AlertCircle className="text-yellow-500 mb-2" size={24} />
//         <p className="font-semibold text-slate-800">
//           Are you sure you want to change the exam details?
//         </p>
//         <p className="text-sm text-slate-500 mb-4">
//           This should only be done if the pre-filled data is incorrect.
//         </p>
//         <div className="flex gap-4">
//           <button
//             onClick={() => {
//               setIsExamEditable(true);
//               toast.dismiss(t.id);
//             }}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700"
//           >
//             Yes, Unlock
//           </button>
//           <button
//             onClick={() => toast.dismiss(t.id)}
//             className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     ), {
//       duration: 6000,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     for (const key in formData) {
//       if (!formData[key]) {
//         const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
//         toast.error(`Please fill in the ${fieldName} field.`);
//         return;
//       }
//     }
//     // if (!paymentScreenshot) {
//     //   toast.error("Please upload the payment screenshot.");
//     //   return;
//     // }

//     setIsLoading(true);
//     const toastId = toast.loading('Registering student...');

//     const submissionData = new FormData();
//     Object.keys(formData).forEach(key => {
//       submissionData.append(key, formData[key]);
//     });
//     // submissionData.append('paymentScreenshot', paymentScreenshot);
//     submissionData.append('isPaid', false);

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/addStudent`, submissionData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       if (response.data?.success) {
//         toast.success('Registration submitted! Please check your email for confirmation.', { id: toastId, duration: 6000 });
//         setFormData({ fullName: '', DOB: '', email: '', className: '', examName: '', examDate: '' });
//         setPaymentScreenshot(null);
//         document.getElementById('payment-screenshot-input').value = '';
//         setIsExamEditable(false); // Re-lock the fields after submission
//       } else {
//         toast.error(response.data?.message || 'Registration failed.', { id: toastId });
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       toast.error(error.response?.data?.message || 'An error occurred.', { id: toastId });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />
//       <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
//         <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* --- Left Side: Form --- */}
//           <div>
//             <div className="mb-10">
//               <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Student Registration</h1>
//               <p className="text-slate-500 mt-2">Fill out the form to apply for the exam.</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <InputField icon={<User />} type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
//                 <InputField icon={<Calendar />} type="date" name="DOB" value={formData.DOB} onChange={handleChange} placeholder="Date of Birth" />
//               </div>
//               <InputField icon={<Mail />} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
//               <InputField icon={<Book />} type="text" name="className" value={formData.className} onChange={handleChange} placeholder="Class (e.g., XII)" />

//               {/* --- Exam Details Section --- */}
//               <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
//                   <div className="flex justify-between items-center">
//                       <h3 className="text-md font-semibold text-slate-700">Exam Details</h3>
//                       {!isExamEditable && (
//                           <button type="button" onClick={handleEditConfirm} className="flex items-center gap-1 text-sm text-indigo-600 font-semibold hover:text-indigo-800">
//                               <Edit size={14} /> Edit
//                           </button>
//                       )}
//                   </div>
//                   <InputField icon={<BookCopy />} type="text" name="examName" value={formData.examName} onChange={handleChange} placeholder="Exam Name" disabled={!isExamEditable} />
//                   <InputField icon={<Calendar />} type="date" name="examDate" value={formData.examDate} onChange={handleChange} placeholder="Exam Date" disabled={!isExamEditable} />
//               </div>

//               <button type="submit" disabled={isLoading} className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center disabled:bg-indigo-400">
//                 {isLoading ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>) : (<><Send className="mr-2 h-5 w-5" /> Register Now</>)}
//               </button>
//             </form>
//           </div>

//           {/* --- Right Side: Payment Instructions --- */}
//           <div className="bg-slate-50 rounded-xl p-8 flex flex-col">
//             <h2 className="text-2xl font-bold text-slate-800 mb-4">Payment Instructions</h2>
//             <div className="flex-grow space-y-6">
//               <div className="text-center">
//                 <img src="https://placehold.co/250x250/E2E8F0/475569?text=Your+QR+Code" alt="Payment QR Code" className="mx-auto rounded-lg shadow-md" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250x250/E2E8F0/475569?text=QR+Code+Error'; }} />
//                 <p className="text-sm text-slate-500 mt-2">Scan to pay the registration fee.</p>
//               </div>
//               <div>
//                 <label htmlFor="payment-screenshot-input" className="text-sm font-medium text-slate-600 mb-2 block">Upload Payment Screenshot</label>
//                 <div className="flex items-center justify-center w-full">
//                     <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-slate-50">
//                         <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                             <Upload className="w-8 h-8 mb-2 text-slate-500" />
//                             <p className="mb-1 text-sm text-slate-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                             <p className="text-xs text-slate-500">PNG, JPG, or JPEG</p>
//                         </div>
//                         <input id="payment-screenshot-input" type="file" className="hidden" onChange={handleFileChange} accept="image/png, image/jpeg, image/jpg" />
//                     </label>
//                 </div>
//                 {paymentScreenshot && <p className="text-xs text-green-600 mt-1">File selected: {paymentScreenshot.name}</p>}
//               </div>
//               <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md text-sm" role="alert">
//                 <p className="font-bold flex items-center gap-2"><AlertCircle size={18} /> Important Notice</p>
//                 <p>After your payment is verified, we will email your admit card. Please double-check your email address for accuracy. For any issues, feel free to contact us.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // --- Reusable Input Field Component ---
// const InputField = ({ icon, type, name, value, onChange, placeholder, disabled = false }) => (
//   <div className="relative">
//     <label className="text-sm font-medium text-slate-600 mb-1 block sr-only">{placeholder}</label>
//     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//       <span className="text-slate-400">{icon}</span>
//     </div>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       disabled={disabled}
//       className="w-full border border-slate-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
//     />
//   </div>
// );



import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { User, Calendar, Mail, Book, BookCopy, Loader2, Send, AlertCircle, Edit } from 'lucide-react';
import { useParams } from 'react-router-dom';

// --- Main Form Component ---
export default function AddStudentForm() {
  const { examName: examNameFromUrl, examDate: examDateFromUrl } = useParams();

  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    DOB: '',
    email: '',
    className: '',
    examName: '',
    examDate: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isExamEditable, setIsExamEditable] = useState(false); // State to control if exam fields are editable

  useEffect(() => {
    if (examNameFromUrl && examDateFromUrl) {
      setFormData(prevData => ({
        ...prevData,
        examName: decodeURIComponent(examNameFromUrl),
        examDate: decodeURIComponent(examDateFromUrl),
      }));
    }
  }, [examNameFromUrl, examDateFromUrl]);

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Function to show confirmation toast ---
  const handleEditConfirm = () => {
    toast((t) => (
      <div className="flex flex-col items-center text-center p-2">
        <AlertCircle className="text-yellow-500 mb-2" size={24} />
        <p className="font-semibold text-slate-800">
          Are you sure you want to change the exam details?
        </p>
        <p className="text-sm text-slate-500 mb-4">
          This should only be done if the pre-filled data is incorrect.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setIsExamEditable(true);
              toast.dismiss(t.id);
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700"
          >
            Yes, Unlock
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      duration: 6000,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        toast.error(`Please fill in the ${fieldName} field.`);
        return;
      }
    }

    setIsLoading(true);
    const toastId = toast.loading('Registering student...');

    try {
      // The data is now sent as JSON since there's no file
      const response = await axios.post(`${import.meta.env.VITE_API_URL}addStudent`, {
          ...formData,
          isPaid: true, // Assuming payment is handled elsewhere or not required for this form
      });

      if (response.data?.success) {
        toast.success(`Successfully registered! Roll No: ${response.data.data.rollNumber}`, { id: toastId, duration: 6000 });
        setFormData({ fullName: '', DOB: '', email: '', className: '', examName: '', examDate: '' });
        setIsExamEditable(false); // Re-lock the fields after submission
      } else {
        toast.error(response.data?.message || 'Registration failed.', { id: toastId });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || 'An error occurred.', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-2xl mx-auto rounded-2xl shadow-xl p-8 md:p-12">
          {/* --- Form Header --- */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Student Registration</h1>
            <p className="text-slate-500 mt-2">Fill out the form to apply for the exam.</p>
          </div>

          {/* --- Form --- */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField icon={<User />} type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
              <InputField icon={<Calendar />} type="date" name="DOB" value={formData.DOB} onChange={handleChange} placeholder="Date of Birth" />
            </div>
            <InputField icon={<Mail />} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
            <InputField icon={<Book />} type="text" name="className" value={formData.className} onChange={handleChange} placeholder="Class (e.g., XII)" />

            {/* --- Exam Details Section --- */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-md font-semibold text-slate-700">Exam Details</h3>
                    {!isExamEditable && (
                        <button type="button" onClick={handleEditConfirm} className="flex items-center gap-1 text-sm text-indigo-600 font-semibold hover:text-indigo-800">
                            <Edit size={14} /> Edit
                        </button>
                    )}
                </div>
                <InputField icon={<BookCopy />} type="text" name="examName" value={formData.examName} onChange={handleChange} placeholder="Exam Name" disabled={!isExamEditable} />
                <InputField icon={<Calendar />} type="date" name="examDate" value={formData.examDate} onChange={handleChange} placeholder="Exam Date" disabled={!isExamEditable} />
            </div>

            <button type="submit" disabled={isLoading} className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center disabled:bg-indigo-400">
              {isLoading ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>) : (<><Send className="mr-2 h-5 w-5" /> Register Now</>)}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// --- Reusable Input Field Component ---
const InputField = ({ icon, type, name, value, onChange, placeholder, disabled = false }) => (
  <div className="relative">
    <label className="text-sm font-medium text-slate-600 mb-1 block sr-only">{placeholder}</label>
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <span className="text-slate-400">{icon}</span>
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full border border-slate-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
    />
  </div>
);

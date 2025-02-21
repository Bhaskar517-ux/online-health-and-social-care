module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// export default function Home() {
//   return (
//     <div className="text-center p-10">
//       <h1 className="text-4xl font-bold">Welcome to Online Health & Social Care</h1>
//       <p className="text-lg mt-4">Providing quality health and social care services.</p>
//     </div>
//   );
// }
// import './globals.css';
// export default function Home() {
//   return (
//     <div
//       className="relative text-white p-10"
//       style={{
//         backgroundImage:
//           "url('https://www.learningconnect.co.uk/assets/images/learningconnect.jpeg')",
//         backgroundSize: "120%", // Zoomed-in effect
//         backgroundPosition: "center",
//         minHeight: "80vh", // Increased image height
//         filter: "brightness(50%)", // Lower brightness for background
//       }}
//     >
//       {/* Dark Overlay for Lower Brightness */}
//       <div className="absolute inset-0 bg-black opacity-40"></div>
//       <div className="relative container mx-auto text-center">
//         {/* Course Offer */}
//         <span className="block mt-6 text-2xl font-semibold">
//           Any Course £6 only
//         </span>
//         {/* Description */}
//         <h1 className="text-2xl mt-4 text-yellow-300 drop-shadow-lg">
//           Accredited CPD Care Certificate Online Courses and Skills for Care
//           Endorsed
//         </h1>
//         <p className="mt-2 text-white drop-shadow">
//           Our Care Certificate Online courses are aligned with the Skills for
//           Care, ensuring that you receive high-quality training that meets
//           industry standards.
//         </p>
//         {/* Features */}
//         <ul className="flex justify-center gap-4 mt-4 text-lg">
//           <li>✅ CPD Accredited</li>
//           <li>🎓 Skills for Care Endorsed</li>
//           <li>📜 Free Certificate</li>
//           <li>📊 Keep Track of Your Learning</li>
//         </ul>
//         {/* Search Form */}
//         <div className="flex justify-center mt-6">
//           <form
//             method="get"
//             action="https://www.learningconnect.co.uk/search"
//             className="flex"
//           >
//             <input
//               type="text"
//               name="search"
//               placeholder="Search courses..."
//               className="px-4 py-2 border rounded-l-lg w-72 text-black"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
//             >
//               🔍
//             </button>
//           </form>
//         </div>
//         {/* Logos */}
//         <div className="flex justify-center gap-6 mt-6">
//           <img
//             src="https://www.learningconnect.co.uk/assets/images/cpd.png"
//             className="w-24 h-24"
//             alt="CPD Accredited Badge"
//           />
//           <img
//             src="https://www.learningconnect.co.uk/assets/images/endo.svg"
//             className="w-24 h-24"
//             alt="Skills for Care Badge"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// import './globals.css';
// export default function Home() {
//   return (
//     <div>
//       {/* Home Section */}
//       <div
//         className="relative text-white p-10"
//         style={{
//           backgroundImage:
//             "url('https://www.learningconnect.co.uk/assets/images/learningconnect.jpeg')",
//           backgroundSize: "120%", // Zoomed-in effect
//           backgroundPosition: "center",
//           minHeight: "80vh", // Increased image height
//           filter: "brightness(50%)", // Lower brightness for background
//         }}
//       >
//         {/* Dark Overlay for Lower Brightness */}
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <div className="relative container mx-auto text-center">
//           {/* Course Offer */}
//           <span className="block mt-6 text-3xl font-bold">
//             Any Course £6 only
//           </span>
//           {/* Description */}
//           <h1 className="text-4xl mt-4 text-yellow-300 drop-shadow-lg font-extrabold">
//             Accredited CPD Care Certificate Online Courses and Skills for Care Endorsed
//           </h1>
//           <p className="mt-3 text-white text-lg drop-shadow">
//             Our Care Certificate Online courses are aligned with Skills for Care, ensuring high-quality training that meets industry standards.
//           </p>
//           {/* Features */}
//           <ul className="flex flex-wrap justify-center gap-4 mt-5 text-lg font-semibold">
//             <li>✅ CPD Accredited</li>
//             <li>🎓 Skills for Care Endorsed</li>
//             <li>📜 Free Certificate</li>
//             <li>📊 Keep Track of Your Learning</li>
//           </ul>
//           {/* Search Form */}
//           <div className="flex justify-center mt-6">
//             <form method="get" action="https://www.learningconnect.co.uk/search" className="flex">
//               <input
//                 type="text"
//                 name="search"
//                 placeholder="Search courses..."
//                 className="px-4 py-2 border rounded-l-lg w-72 text-black"
//               />
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
//                 🔍
//               </button>
//             </form>
//           </div>
//           {/* Logos */}
//           <div className="flex flex-wrap justify-center gap-6 mt-6">
//             <img src="https://www.learningconnect.co.uk/assets/images/cpd.png" className="w-24 h-24" alt="CPD Accredited Badge" />
//             <img src="https://www.learningconnect.co.uk/assets/images/endo.svg" className="w-24 h-24" alt="Skills for Care Badge" />
//           </div>
//         </div>
//       </div>
// {/* Services */}
// <div className="container mx-auto service py-10 bg-gray-100">
//   <div className="text-center mb-10">
//     <h4 className="text-xl text-blue-600 font-semibold">What We Do</h4>
//     <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
//       Our Services by Experts
//     </h1>
//     <p className="mt-3 text-lg text-gray-700">
//       High-quality therapy and training delivered by professionals to meet your needs.
//     </p>
//   </div>
//   <div className="flex flex-wrap justify-center gap-6">
//     {["service-1", "service-2", "service-3", "service-4", "service-5", "service-6", "service-7", "service-8"].map((service, index) => (
//       <div
//         key={index}
//         className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
//       >
//         <img
//           src={`/img/${service}.jpg`} // Using public folder path
//           className="w-full h-48 object-cover"
//           alt={`Service ${index + 1}`}
//         />
//         <div className="p-5 text-center">
//           <h5 className="text-2xl font-bold text-gray-900 mb-3">
//             {service.replace("-", " ").replace("service", "Service").toUpperCase()}
//           </h5>
//           <p className="text-gray-700">
//             Professional therapy and training tailored to meet your needs.
//           </p>
//           <a
//             href="#"
//             className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Read More
//           </a>
//         </div>
//       </div>
//     ))}
//   </div>
//   {/* More Services Button */}
//   <div className="text-center mt-10">
//     <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold" href="#">
//       View More Services
//     </a>
//   </div>
// </div>
//     </div>
//   );
// }
// 'use client';
// import './globals.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// export default function Home() {
//   return (
//     <div>
//       {/* Home Section */}
//       <div
//         className="relative text-white p-10"
//         style={{
//           backgroundImage:
//             "url('https://www.learningconnect.co.uk/assets/images/learningconnect.jpeg')",
//           backgroundSize: "120%", // Zoomed-in effect
//           backgroundPosition: "center",
//           minHeight: "80vh", // Increased image height
//           filter: "brightness(50%)", // Lower brightness for background
//         }}
//       >
//         {/* Dark Overlay for Lower Brightness */}
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <div className="relative container mx-auto text-center">
//           <span className="block mt-6 text-3xl font-bold">Any Course £6 only</span>
//           <h1 className="text-4xl mt-4 text-yellow-300 drop-shadow-lg font-extrabold">
//             Accredited CPD Care Certificate Online Courses and Skills for Care Endorsed
//           </h1>
//           <p className="mt-3 text-white text-lg drop-shadow">
//             Our Care Certificate Online courses are aligned with Skills for Care, ensuring high-quality training that meets industry standards.
//           </p>
//           {/* Features */}
//           <ul className="flex flex-wrap justify-center gap-4 mt-5 text-lg font-semibold">
//             <li>✅ CPD Accredited</li>
//             <li>🎓 Skills for Care Endorsed</li>
//             <li>📜 Free Certificate</li>
//             <li>📊 Keep Track of Your Learning</li>
//           </ul>
//           {/* Search Form */}
//           <div className="flex justify-center mt-6">
//             <form method="get" action="https://www.learningconnect.co.uk/search" className="flex">
//               <input
//                 type="text"
//                 name="search"
//                 placeholder="Search courses..."
//                 className="px-4 py-2 border rounded-l-lg w-72 text-black"
//               />
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
//                 🔍
//               </button>
//             </form>
//           </div>
//           {/* Logos */}
//           <div className="flex flex-wrap justify-center gap-6 mt-6">
//             <img src="https://www.learningconnect.co.uk/assets/images/cpd.png" className="w-24 h-24" alt="CPD Accredited Badge" />
//             <img src="https://www.learningconnect.co.uk/assets/images/endo.svg" className="w-24 h-24" alt="Skills for Care Badge" />
//           </div>
//         </div>
//       </div>
//       {/* Feature Section */}
// <div className="bg-gray-100 py-10">
//   <div className="container mx-auto text-center">
//     <div className="mb-10">
//       <h4 className="text-xl font-semibold text-blue-600">Why Choose Us</h4>
//       <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
//         Get Your Life Style Back
//       </h1>
//       <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
//         We provide high-quality, accredited training that meets industry standards, ensuring 
//         the best learning experience for you.
//       </p>
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {[
//         { icon: "fas fa-user-md", title: "Licensed Therapist" },
//         { icon: "fas fa-briefcase-medical", title: "Personalized Treatment" },
//         { icon: "fas fa-hospital-user", title: "Therapy Goals" },
//         { icon: "fas fa-users", title: "Practitioners Network" },
//         { icon: "fas fa-spa", title: "Comfortable Center" },
//         { icon: "fas fa-heart", title: "Experienced Staff" },
//         { icon: "fas fa-diagnoses", title: "Advanced Techniques" },
//         { icon: "fas fa-hand-holding-heart", title: "Holistic Approach" },
//       ].map((feature, index) => (
//         <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
//           <div className="text-blue-600 text-4xl mb-4">
//             <i className={feature.icon}></i>
//           </div>
//           <h5 className="text-2xl font-semibold mb-3">{feature.title}</h5>
//           <p className="text-gray-700">
//             Providing top-notch services to help you achieve your therapy goals.
//           </p>
//         </div>
//       ))}
//     </div>
//     <div className="mt-10">
//       <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
//         More Details
//       </a>
//     </div>
//   </div>
// </div>
//       {/* Services Section */}
//       <div className="container mx-auto service py-10 bg-gray-100">
//         <div className="text-center mb-10">
//           <h4 className="text-xl text-blue-600 font-semibold">What We Do</h4>
//           <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
//             Our Services by Experts
//           </h1>
//           <p className="mt-3 text-lg text-gray-700">
//             High-quality therapy and training delivered by professionals to meet your needs.
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-6">
//           {["service-1", "service-2", "service-3", "service-4", "service-5", "service-6", "service-7", "service-8"].map((service, index) => (
//             <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
//               <img src={`/img/${service}.jpg`} className="w-full h-48 object-cover" alt={`Service ${index + 1}`} />
//               <div className="p-5 text-center">
//                 <h5 className="text-2xl font-bold text-gray-900 mb-3">
//                   {service.replace("-", " ").replace("service", "Service").toUpperCase()}
//                 </h5>
//                 <p className="text-gray-700">Professional therapy and training tailored to meet your needs.</p>
//                 <a href="#" className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Read More</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import './globals.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// export default function Home() {
//   return (
//     <div>
//       {/* Home Section */}
//       <div
//         className="relative text-white p-10"
//         style={{
//           backgroundImage:
//             "url('https://www.learningconnect.co.uk/assets/images/learningconnect.jpeg')",
//           backgroundSize: "cover", // Ensures proper background sizing
//           backgroundPosition: "center",
//           minHeight: "80vh", // Increased image height
//         }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative container mx-auto text-center">
//           <span className="block mt-6 text-3xl font-bold">Any Course £6 only</span>
//           <h1 className="text-4xl mt-4 text-yellow-300 drop-shadow-lg font-extrabold">
//             Accredited CPD Care Certificate Online Courses and Skills for Care Endorsed
//           </h1>
//           <p className="mt-3 text-white text-lg drop-shadow">
//             Our Care Certificate Online courses align with Skills for Care, ensuring high-quality training that meets industry standards.
//           </p>
//           {/* Features */}
//           <ul className="flex flex-wrap justify-center gap-4 mt-5 text-lg font-semibold">
//             <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> CPD Accredited</li>
//             <li className="flex items-center"><i className="fas fa-graduation-cap text-blue-500 mr-2"></i> Skills for Care Endorsed</li>
//             <li className="flex items-center"><i className="fas fa-certificate text-purple-500 mr-2"></i> Free Certificate</li>
//             <li className="flex items-center"><i className="fas fa-chart-line text-red-500 mr-2"></i> Track Your Learning</li>
//           </ul>
//           {/* Search Form */}
//           <div className="flex justify-center mt-6">
//             <form method="get" action="https://www.learningconnect.co.uk/search" className="flex">
//               <input
//                 type="text"
//                 name="search"
//                 placeholder="Search courses..."
//                 className="px-4 py-2 border rounded-l-lg w-72 text-black"
//               />
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
//                 🔍
//               </button>
//             </form>
//           </div>
//           {/* Logos */}
//           <div className="flex flex-wrap justify-center gap-6 mt-6">
//             <img src="https://www.learningconnect.co.uk/assets/images/cpd.png" className="w-28 h-28" alt="CPD Accredited Badge" />
//             <img src="https://www.learningconnect.co.uk/assets/images/endo.svg" className="w-28 h-28" alt="Skills for Care Badge" />
//           </div>
//         </div>
//       </div>
//       {/* Feature Section */}
// <div className="bg-gray-100 py-10">
//   <div className="container mx-auto text-center px-4">
//     <h4 className="text-xl font-semibold text-blue-600">Why Choose Us</h4>
//     <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
//       Get Your Life Style Back
//     </h1>
//     <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
//       We provide high-quality, accredited training that meets industry standards, ensuring the best learning experience for you.
//     </p>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//       {[
//         { icon: "fas fa-user-md", title: "Licensed Therapist", color: "text-blue-600", hoverColor: "hover:text-blue-800" },
//         { icon: "fas fa-briefcase-medical", title: "Personalized Treatment", color: "text-green-600", hoverColor: "hover:text-green-800" },
//         { icon: "fas fa-hospital-user", title: "Therapy Goals", color: "text-purple-600", hoverColor: "hover:text-purple-800" },
//         { icon: "fas fa-users", title: "Practitioners Network", color: "text-red-600", hoverColor: "hover:text-red-800" },
//         { icon: "fas fa-spa", title: "Comfortable Center", color: "text-yellow-600", hoverColor: "hover:text-yellow-800" },
//         { icon: "fas fa-heart", title: "Experienced Staff", color: "text-pink-600", hoverColor: "hover:text-pink-800" },
//         { icon: "fas fa-diagnoses", title: "Advanced Techniques", color: "text-indigo-600", hoverColor: "hover:text-indigo-800" },
//         { icon: "fas fa-hand-holding-heart", title: "Holistic Approach", color: "text-teal-600", hoverColor: "hover:text-teal-800" },
//       ].map((feature, index) => (
//         <div
//           key={index}
//           className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
//         >
//           <div className={`${feature.color} ${feature.hoverColor} text-4xl mb-4 transition-all duration-300`}>
//             <i className={feature.icon}></i>
//           </div>
//           <h5 className="text-2xl font-semibold mb-3 transition-all duration-300 hover:text-gray-900">
//             {feature.title}
//           </h5>
//           <p className="text-gray-700 hover:text-gray-900 transition-all duration-300">
//             Providing top-notch services to help you achieve your therapy goals.
//           </p>
//         </div>
//       ))}
//     </div>
//           <div className="mt-10">
//             <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
//               More Details
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Services Section */}
//       <div className="container mx-auto py-10 bg-gray-100">
//         <div className="text-center mb-10">
//           <h4 className="text-xl text-blue-600 font-semibold">What We Do</h4>
//           <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
//             Our Services by Experts
//           </h1>
//           <p className="mt-3 text-lg text-gray-700">
//             High-quality therapy and training delivered by professionals to meet your needs.
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-6">
//           {["service-1", "service-2", "service-3", "service-4", "service-5", "service-6", "service-7", "service-8"].map((service, index) => (
//             <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
//               <img src={`/img/${service}.jpg`} className="w-full h-48 object-cover" alt={`Service ${index + 1}`} />
//               <div className="p-5 text-center">
//                 <h5 className="text-2xl font-bold text-gray-900 mb-3">
//                   {service.replace("-", " ").replace("service", "Service").toUpperCase()}
//                 </h5>
//                 <p className="text-gray-700">Professional therapy and training tailored to meet your needs.</p>
//                 <a href="#" className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Read More</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     {/* Team Section */}
//     <div className="container-fluid team py-5">
//     <div className="container py-5">
//       <div className="section-title mb-5">
//         <div className="sub-style">
//           <h4 className="sub-title px-3 mb-0">Meet our team</h4>
//         </div>
//         <h1 className="display-3 mb-4">Physiotherapy Services from Professional Therapists</h1>
//         <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
//       </div>
//       <div className="row g-4 justify-center">
//         {[1, 2, 3, 4].map((num, index) => (
//           <div key={index} className="col-md-6 col-lg-6 col-xl-3">
//             <div className="team-item rounded">
//               <div className="team-img rounded-top h-100">
//                 <img src={`/img/team-${num}.jpg`} className="img-fluid rounded-top w-100" alt="Team Member" />
//                 <div className="team-icon d-flex justify-content-center">
//                   {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, i) => (
//                     <a key={i} className="btn btn-square btn-primary text-white rounded-circle mx-1" href="#">
//                       <i className={`fab fa-${icon}`} />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//               <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
//                 <h5>Full Name</h5>
//                 <p className="mb-0">{num === 1 ? "Message Physio Therapist" : num === 2 ? "Rehabilitation Therapist" : "Doctor of Physical Therapy"}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
//   );
// }
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative text-white p-10",
                style: {
                    backgroundImage: "url('https://www.learningconnect.co.uk/assets/images/learningconnect.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "80vh"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative container mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block mt-6 text-3xl font-bold",
                                children: "Any Course £6 only"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl mt-4 text-yellow-300 drop-shadow-lg font-extrabold",
                                children: "Accredited CPD Care Certificate Online Courses and Skills for Care Endorsed"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-white text-lg drop-shadow",
                                children: "Our Care Certificate Online courses align with Skills for Care, ensuring high-quality training that meets industry standards."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-wrap justify-center gap-4 mt-5 text-lg font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-check-circle text-green-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 47
                                            }, this),
                                            " CPD Accredited"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 574,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-graduation-cap text-blue-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 47
                                            }, this),
                                            " Skills for Care Endorsed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-certificate text-purple-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 47
                                            }, this),
                                            " Free Certificate"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-chart-line text-red-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 577,
                                                columnNumber: 47
                                            }, this),
                                            " Track Your Learning"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 573,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    method: "get",
                                    action: "https://www.learningconnect.co.uk/search",
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "search",
                                            placeholder: "Search courses...",
                                            className: "px-4 py-2 border rounded-l-lg w-72 text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 589,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-6 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://www.learningconnect.co.uk/assets/images/cpd.png",
                                        className: "w-28 h-28",
                                        alt: "CPD Accredited Badge"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 597,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://www.learningconnect.co.uk/assets/images/endo.svg",
                                        className: "w-28 h-28",
                                        alt: "Skills for Care Badge"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 598,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 596,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto text-center px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xl font-semibold text-blue-600",
                            children: "Why Choose Us"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-extrabold text-gray-900 mt-2",
                            children: "Get Your Life Style Back"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 607,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-lg text-gray-700 max-w-2xl mx-auto",
                            children: "We provide high-quality, accredited training that meets industry standards, ensuring the best learning experience for you."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6",
                            children: [
                                {
                                    icon: "fas fa-user-md",
                                    title: "Licensed Therapist",
                                    color: "text-blue-600",
                                    hoverColor: "hover:text-blue-800"
                                },
                                {
                                    icon: "fas fa-briefcase-medical",
                                    title: "Personalized Treatment",
                                    color: "text-green-600",
                                    hoverColor: "hover:text-green-800"
                                },
                                {
                                    icon: "fas fa-hospital-user",
                                    title: "Therapy Goals",
                                    color: "text-purple-600",
                                    hoverColor: "hover:text-purple-800"
                                },
                                {
                                    icon: "fas fa-users",
                                    title: "Practitioners Network",
                                    color: "text-red-600",
                                    hoverColor: "hover:text-red-800"
                                },
                                {
                                    icon: "fas fa-spa",
                                    title: "Comfortable Center",
                                    color: "text-yellow-600",
                                    hoverColor: "hover:text-yellow-800"
                                },
                                {
                                    icon: "fas fa-heart",
                                    title: "Experienced Staff",
                                    color: "text-pink-600",
                                    hoverColor: "hover:text-pink-800"
                                },
                                {
                                    icon: "fas fa-diagnoses",
                                    title: "Advanced Techniques",
                                    color: "text-indigo-600",
                                    hoverColor: "hover:text-indigo-800"
                                },
                                {
                                    icon: "fas fa-hand-holding-heart",
                                    title: "Holistic Approach",
                                    color: "text-teal-600",
                                    hoverColor: "hover:text-teal-800"
                                }
                            ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${feature.color} ${feature.hoverColor} text-4xl mb-4 transition-all duration-300`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: feature.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 630,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-2xl font-semibold mb-3 transition-all duration-300 hover:text-gray-900",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 632,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 hover:text-gray-900 transition-all duration-300",
                                            children: "Providing top-notch services to help you achieve your therapy goals."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 614,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition",
                                children: "More Details"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 605,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 604,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto py-10 bg-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xl text-blue-600 font-semibold",
                                children: "What We Do"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-extrabold text-gray-900 mt-2",
                                children: "Our Services by Experts"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-lg text-gray-700",
                                children: "High-quality therapy and training delivered by professionals to meet your needs."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 652,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-6",
                        children: [
                            "service-1",
                            "service-2",
                            "service-3",
                            "service-4",
                            "service-5",
                            "service-6",
                            "service-7",
                            "service-8"
                        ].map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `/img/${service}.jpg`,
                                        className: "w-full h-48 object-cover",
                                        alt: `Service ${index + 1}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 665,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-2xl font-bold text-gray-900 mb-3",
                                                children: service.replace("-", " ").replace("service", "Service").toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 667,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700",
                                                children: "Professional therapy and training tailored to meet your needs."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 670,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
                                                children: "Read More"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 671,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 666,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 651,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-fluid team py-5 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-title mb-5 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "sub-title text-blue-600 mb-2",
                                    children: "Meet Our Team"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 681,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "display-3 mb-4 font-extrabold text-gray-900",
                                    children: "Physiotherapy Services from Professional Therapists"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 682,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-0 text-lg text-gray-700",
                                    children: "Our team of experienced therapists is committed to providing top-notch care and support to help you achieve your wellness goals."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 685,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 680,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row g-4 justify-content-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-3 col-lg-3 col-xl-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-img rounded-top h-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/img/team-1.jpg",
                                                        className: "img-fluid rounded-top w-100",
                                                        alt: "Physio Therapist - John Doe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "team-icon d-flex justify-content-center",
                                                        children: [
                                                            "facebook-f",
                                                            "twitter",
                                                            "instagram",
                                                            "linkedin-in"
                                                        ].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "btn btn-square btn-primary text-white rounded-circle mx-1",
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: `fab fa-${icon}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 705,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-content text-center border border-primary border-top-0 rounded-bottom p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-xl font-semibold text-gray-900",
                                                        children: "John Doe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Message Physio Therapist"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 716,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 695,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-3 col-lg-3 col-xl-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-img rounded-top h-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/img/team-2.jpg",
                                                        className: "img-fluid rounded-top w-100",
                                                        alt: "Rehabilitation Therapist - Jane Smith"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "team-icon d-flex justify-content-center",
                                                        children: [
                                                            "facebook-f",
                                                            "twitter",
                                                            "instagram",
                                                            "linkedin-in"
                                                        ].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "btn btn-square btn-primary text-white rounded-circle mx-1",
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: `fab fa-${icon}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 740,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 726,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-content text-center border border-primary border-top-0 rounded-bottom p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-xl font-semibold text-gray-900",
                                                        children: "Jane Smith"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Rehabilitation Therapist"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 746,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 725,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 724,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-3 col-lg-3 col-xl-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-img rounded-top h-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/img/team-3.jpg",
                                                        className: "img-fluid rounded-top w-100",
                                                        alt: "Physical Therapist - Alex Johnson"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "team-icon d-flex justify-content-center",
                                                        children: [
                                                            "facebook-f",
                                                            "twitter",
                                                            "instagram",
                                                            "linkedin-in"
                                                        ].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "btn btn-square btn-primary text-white rounded-circle mx-1",
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: `fab fa-${icon}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 756,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-content text-center border border-primary border-top-0 rounded-bottom p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-xl font-semibold text-gray-900",
                                                        children: "Alex Johnson"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Doctor of Physical Therapy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 778,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 776,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 754,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-3 col-lg-3 col-xl-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-img rounded-top h-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/img/team-4.jpg",
                                                        className: "img-fluid rounded-top w-100",
                                                        alt: "Physical Therapist - Emily White"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "team-icon d-flex justify-content-center",
                                                        children: [
                                                            "facebook-f",
                                                            "twitter",
                                                            "instagram",
                                                            "linkedin-in"
                                                        ].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "btn btn-square btn-primary text-white rounded-circle mx-1",
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: `fab fa-${icon}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 800,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 795,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 786,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-content text-center border border-primary border-top-0 rounded-bottom p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-xl font-semibold text-gray-900",
                                                        children: "Emily White"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Physical Therapist"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 806,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 785,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 784,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 692,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 679,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 678,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 548,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__24a761._.js.map
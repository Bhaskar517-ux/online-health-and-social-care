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


'use client';

import './globals.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <div
        className="relative text-white p-10"
        style={{
          backgroundImage:
            "url('https://www.learningconnect.co.uk/assets/images/learningconnect.jpeg')",
          backgroundSize: "cover", // Ensures proper background sizing
          backgroundPosition: "center",
          minHeight: "80vh", // Increased image height
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container mx-auto text-center">
          <span className="block mt-6 text-3xl font-bold">Any Course £6 only</span>
          <h1 className="text-4xl mt-4 text-yellow-300 drop-shadow-lg font-extrabold">
            Accredited CPD Care Certificate Online Courses and Skills for Care Endorsed
          </h1>
          <p className="mt-3 text-white text-lg drop-shadow">
            Our Care Certificate Online courses align with Skills for Care, ensuring high-quality training that meets industry standards.
          </p>

          {/* Features */}
          <ul className="flex flex-wrap justify-center gap-4 mt-5 text-lg font-semibold">
            <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> CPD Accredited</li>
            <li className="flex items-center"><i className="fas fa-graduation-cap text-blue-500 mr-2"></i> Skills for Care Endorsed</li>
            <li className="flex items-center"><i className="fas fa-certificate text-purple-500 mr-2"></i> Free Certificate</li>
            <li className="flex items-center"><i className="fas fa-chart-line text-red-500 mr-2"></i> Track Your Learning</li>
          </ul>

          {/* Search Form */}
          <div className="flex justify-center mt-6">
            <form method="get" action="https://www.learningconnect.co.uk/search" className="flex">
              <input
                type="text"
                name="search"
                placeholder="Search courses..."
                className="px-4 py-2 border rounded-l-lg w-72 text-black"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                🔍
              </button>
            </form>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <img src="https://www.learningconnect.co.uk/assets/images/cpd.png" className="w-28 h-28" alt="CPD Accredited Badge" />
            <img src="https://www.learningconnect.co.uk/assets/images/endo.svg" className="w-28 h-28" alt="Skills for Care Badge" />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto text-center px-4">
          <h4 className="text-xl font-semibold text-blue-600">Why Choose Us</h4>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
            Get Your Life Style Back
          </h1>
          <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
            We provide high-quality, accredited training that meets industry standards, ensuring the best learning experience for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {[
              { icon: "fas fa-user-md", title: "Licensed Therapist", color: "text-blue-600", hoverColor: "hover:text-blue-800" },
              { icon: "fas fa-briefcase-medical", title: "Personalized Treatment", color: "text-green-600", hoverColor: "hover:text-green-800" },
              { icon: "fas fa-hospital-user", title: "Therapy Goals", color: "text-purple-600", hoverColor: "hover:text-purple-800" },
              { icon: "fas fa-users", title: "Practitioners Network", color: "text-red-600", hoverColor: "hover:text-red-800" },
              { icon: "fas fa-spa", title: "Comfortable Center", color: "text-yellow-600", hoverColor: "hover:text-yellow-800" },
              { icon: "fas fa-heart", title: "Experienced Staff", color: "text-pink-600", hoverColor: "hover:text-pink-800" },
              { icon: "fas fa-diagnoses", title: "Advanced Techniques", color: "text-indigo-600", hoverColor: "hover:text-indigo-800" },
              { icon: "fas fa-hand-holding-heart", title: "Holistic Approach", color: "text-teal-600", hoverColor: "hover:text-teal-800" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className={`${feature.color} ${feature.hoverColor} text-4xl mb-4 transition-all duration-300`}>
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-2xl font-semibold mb-3 transition-all duration-300 hover:text-gray-900">
                  {feature.title}
                </h5>
                <p className="text-gray-700 hover:text-gray-900 transition-all duration-300">
                  Providing top-notch services to help you achieve your therapy goals.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              More Details
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-10 bg-gray-100">
        <div className="text-center mb-10">
          <h4 className="text-xl text-blue-600 font-semibold">What We Do</h4>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
            Our Services by Experts
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            High-quality therapy and training delivered by professionals to meet your needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {["service-1", "service-2", "service-3", "service-4", "service-5", "service-6", "service-7", "service-8"].map((service, index) => (
            <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={`/img/${service}.jpg`} className="w-full h-48 object-cover" alt={`Service ${index + 1}`} />
              <div className="p-5 text-center">
                <h5 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.replace("-", " ").replace("service", "Service").toUpperCase()}
                </h5>
                <p className="text-gray-700">Professional therapy and training tailored to meet your needs.</p>
                <a href="#" className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid team py-5 bg-gray-50">
  <div className="container py-5">
    <div className="section-title mb-5 text-center">
      <h4 className="sub-title text-blue-600 mb-2">Meet Our Team</h4>
      <h1 className="display-3 mb-4 font-extrabold text-gray-900">
        Physiotherapy Services from Professional Therapists
      </h1>
      <p className="mb-0 text-lg text-gray-700">
        Our team of experienced therapists is committed to providing
        top-notch care and support to help you achieve your wellness goals.
      </p>
    </div>

    {/* Team Members in One Row */}
    <div className="row g-4 justify-content-center">
      {/* Team Member 1 */}
      <div className="col-md-3 col-lg-3 col-xl-3">
        <div className="team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="team-img rounded-top h-100">
            <img
              src="/img/team-1.jpg"
              className="img-fluid rounded-top w-100"
              alt="Physio Therapist - John Doe"
            />
            <div className="team-icon d-flex justify-content-center">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                (icon, i) => (
                  <a
                    key={i}
                    className="btn btn-square btn-primary text-white rounded-circle mx-1"
                    href="#"
                  >
                    <i className={`fab fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>
          <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
            <h5 className="text-xl font-semibold text-gray-900">John Doe</h5>
            <p className="text-gray-600">Message Physio Therapist</p>
          </div>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="col-md-3 col-lg-3 col-xl-3">
        <div className="team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="team-img rounded-top h-100">
            <img
              src="/img/team-2.jpg"
              className="img-fluid rounded-top w-100"
              alt="Rehabilitation Therapist - Jane Smith"
            />
            <div className="team-icon d-flex justify-content-center">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                (icon, i) => (
                  <a
                    key={i}
                    className="btn btn-square btn-primary text-white rounded-circle mx-1"
                    href="#"
                  >
                    <i className={`fab fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>
          <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
            <h5 className="text-xl font-semibold text-gray-900">Jane Smith</h5>
            <p className="text-gray-600">Rehabilitation Therapist</p>
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="col-md-3 col-lg-3 col-xl-3">
        <div className="team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="team-img rounded-top h-100">
            <img
              src="/img/team-3.jpg"
              className="img-fluid rounded-top w-100"
              alt="Physical Therapist - Alex Johnson"
            />
            <div className="team-icon d-flex justify-content-center">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                (icon, i) => (
                  <a
                    key={i}
                    className="btn btn-square btn-primary text-white rounded-circle mx-1"
                    href="#"
                  >
                    <i className={`fab fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>
          <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
            <h5 className="text-xl font-semibold text-gray-900">Alex Johnson</h5>
            <p className="text-gray-600">Doctor of Physical Therapy</p>
          </div>
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="col-md-3 col-lg-3 col-xl-3">
        <div className="team-item rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="team-img rounded-top h-100">
            <img
              src="/img/team-4.jpg"
              className="img-fluid rounded-top w-100"
              alt="Physical Therapist - Emily White"
            />
            <div className="team-icon d-flex justify-content-center">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                (icon, i) => (
                  <a
                    key={i}
                    className="btn btn-square btn-primary text-white rounded-circle mx-1"
                    href="#"
                  >
                    <i className={`fab fa-${icon}`} />
                  </a>
                )
              )}
            </div>
          </div>
          <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
            <h5 className="text-xl font-semibold text-gray-900">Emily White</h5>
            <p className="text-gray-600">Physical Therapist</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

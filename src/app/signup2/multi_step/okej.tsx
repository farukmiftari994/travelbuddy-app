// import Image from "next/image";
// import image from "../../../img/klipartz.png";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

// export default function multiStep() {
//   return (
//     <>
//       <form>
//         <div className="col-span-full">
//           <div className="text-center bg-gray-300 p-4  border-b-4 border-white">
//             <h2 className="text-xl font-semibold leading-7 mt-4 text-gray-900">
//               Profile
//             </h2>

//             <p className="mt-1 mb-16 text-sm leading-6 text-gray-600">
//               This information will be displayed publicly so be careful what you
//               share.
//             </p>
//           </div>
//           <div className="flex justify-center ">
//             <UserCircleIcon
//               style={{ width: "130px", marginTop: "-63px" }}
//               className="text-gray-800 text-center bg-zinc-200 rounded-full border-4 border-white"
//               aria-hidden="true"
//             />
//           </div>

//           <div className="flex justify-center rounded-lg px-6 py-3">
//             <div className="text-center">
//               <div className="text-sm leading-6 text-gray-600">
//                 <label
//                   htmlFor="file-upload"
//                   className="relative p-2 cursor-pointer rounded-xl bg-white font-bold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2"
//                 >
//                   <span className="m-3">Upload a file</span>
//                   <input
//                     id="file-upload"
//                     name="file-upload"
//                     type="file"
//                     className="sr-only"
//                   />
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="border-b border-gray-900/10 pb-12">
//             <div className="mt-4">
//               <div className=" gap-2">
//                 <div className="sm:col-span-4 m-2">
//                   <label
//                     htmlFor="firstname"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     First Name
//                   </label>
//                   <div>
//                     <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                       <input
//                         type="text"
//                         name="firstname"
//                         id="firstname"
//                         autoComplete="firstname"
//                         className="block rounded-lg bg-white flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
//                         placeholder=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="sm:col-span-4 m-2">
//                   <label
//                     htmlFor="lastname"
//                     className="block  text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Last Name
//                   </label>
//                   <div>
//                     <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                       <input
//                         type="text"
//                         name="lastname"
//                         id="lastname"
//                         autoComplete="lastname"
//                         className="block rounded-lg bg-white flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="sm:col-span-4 m-2">
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Date of Birth
//                 </label>
//                 <div>
//                   <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                     <input
//                       type="date"
//                       name="birthdate"
//                       id="birthdate"
//                       autoComplete="birthdate"
//                       className="block rounded-lg bg-white flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="col-span-full">
//                 <label
//                   htmlFor="about"
//                   className="block text-center mt-2 text-sm font-medium leading-6 text-gray-900"
//                 >
//                   About
//                 </label>
//                 <div className="m-2">
//                   <textarea
//                     id="about"
//                     name="about"
//                     rows={2}
//                     className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     defaultValue={""}
//                   />
//                 </div>
//                 <p className="mt-3 text-center text-sm leading-6 text-gray-600">
//                   Write a few sentences about yourself.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="last-name"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="last-name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label
//                 htmlFor="country"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>Germany</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="street-address"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label
//                 htmlFor="city"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="region"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="postal-code"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="border-b border-gray-900/10 pb-12">
//             <h2 className="text-base font-semibold leading-7 text-gray-900">
//               Notifications
//             </h2>
//             <p className="mt-1 text-sm leading-6 text-gray-600">
//               We'll always let you know about important changes, but you pick
//               what else you want to hear about.
//             </p>
//           </div>
//         </div>

//         <div className="mt-6 flex items-center justify-end gap-x-6">
//           <button
//             type="button"
//             className="text-sm font-semibold leading-6 text-gray-900"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//       <div className=" details flex items-center justify-center flex-end">
//         <Image src={image} alt="travel" style={{ width: "100px" }} />
//         <div>
//           <p
//             style={{
//               //   marginTop: "40px",
//               marginLeft: "20px",
//               color: "white",
//             }}
//           >
//             Travel Buddy
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

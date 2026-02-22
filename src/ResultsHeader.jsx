// import React, { useContext, useState } from "react";
// import { NotesContext } from "./NotesContext";
// export default function ResultsHeader() {
//   const [search, setSearch] = useState("");
//   return (
//     <div>
//       <div className="bg-[#F7F7F7] w-full flex items-center min-h-17.5 p-2.5">
//         <div className="flex w-full  justify-center  gap-x-12.5  mx-auto">
//           <input
//             type="text"
//             className="w-50 rounded-lg bg-white  px-2 py-2"
//             placeholder="Filter By"
//             onChange={(e) => {
//               setSearch(e.target.value);
//             }}
//           />
//           <select
//             name="sortBy"
//             id="sortBy"
//             className="bg-white w-50 rounded-lg px-2 py-2"
//           >
//             <option value="sortBy">Sort By</option>
//             <option value="Alphabet">Alphabet</option>
//             <option value="Last Edited">Last Edited</option>
//             <option value="Recently Created">Recently Created</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

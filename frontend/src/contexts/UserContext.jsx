// import { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// export const useUserContext = () => useContext(UserContext);
// export function UserContextProvider({ children }) {
//   const [userId, setUserId] = useState(null);
//   const [parentId, setParentId] = useState(null);
//   const [nanyId, setNanyId] = useState(null);
//   return (
//     <UserContext.Provider
//       value={{ userId, setUserId, parentId, setParentId, nanyId, setNanyId }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// }

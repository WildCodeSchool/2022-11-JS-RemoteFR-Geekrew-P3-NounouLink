import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);
export function UserContextProvider({ children }) {
  const [userId, setUserId] = useState(3);
  const [parentId, setParentId] = useState(1);
  const [nannyId, setNannyId] = useState(null);
  const values = useMemo(
    () => ({ userId, setUserId, parentId, setParentId, nannyId, setNannyId }),
    [userId, parentId, nannyId]
  );
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

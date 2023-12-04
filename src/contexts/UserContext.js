import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState(false);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  const { signed, setSigned, name, setName } = context;
  return { signed, setSigned, name, setName };
}
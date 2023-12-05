import * as React from 'react';

export const UserContext = React.createContext();

export default function UserProvider({children}){
  const [signed, setSigned] = React.useState(false);
  const [name, setName] = React.useState('');

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser(){
  const context = React.useContext(UserContext);
  const {signed, setSigned, name, setName} = context
  return {signed, setSigned, name, setName}
}
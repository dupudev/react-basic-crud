import { createContext, useState } from 'react';

const EditModeContext = createContext();

export const EditModeProvider = ({ children }) => {
  const [editMode, setEditMode] = useState({
    editMode: false,
    make: '',
    model: '',
    year: '',
    idx: null,
  });

  return (
    <EditModeContext.Provider value={{ editMode, setEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export default EditModeContext;

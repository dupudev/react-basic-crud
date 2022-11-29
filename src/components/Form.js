import React, { useContext } from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';

import EditModeContext from '../context/EditMode';

const Form = () => {
  const { editMode } = useContext(EditModeContext);
  return <div>{editMode.editMode ? <EditForm /> : <AddForm />}</div>;
};

export default Form;

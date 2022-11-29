import React, { useState, useContext, useEffect, useRef } from 'react';
import CarsContext from '../context/Cars';
import EditModeContext from '../context/EditMode';

const EditForm = () => {
  const inputEditMake = useRef();

  const { editMode, setEditMode } = useContext(EditModeContext);
  const { cars, setCars } = useContext(CarsContext);

  const [editMake, setEditMake] = useState('');
  const [editModel, setEditModel] = useState('');
  const [editYear, setEditYear] = useState('');

  useEffect(() => {
    setEditMake(editMode.make);
    setEditModel(editMode.model);
    setEditYear(editMode.year);

    editMode.editMode && inputEditMake.current.focus();
  }, [editMode]);

  const saveEdit = (event) => {
    event.preventDefault();
    let tempCars = [...cars];
    tempCars[editMode.idx].make = editMake;
    tempCars[editMode.idx].model = editModel;
    tempCars[editMode.idx].year = editYear;

    setCars(tempCars);

    setEditMode({
      editMode: false,
      make: '',
      model: '',
      year: '',
      idx: null,
    });
  };

  const cancelEdit = (event) => {
    event.preventDefault();
    setEditMode({
      editMode: false,
      make: '',
      model: '',
      year: '',
      idx: null,
    });
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
      <div className='trans-bg col-md-12 col-lg-10 col-xl-8 d-flex flex-column align-items-center justify-content-center p-5 rounded-4'>
        <h3 className='mb-5'>Edit car</h3>
        <form className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
          <div className='mb-3'>
            <label className='form-label fw-bold'>Make:</label>
            <input
              ref={inputEditMake}
              type='text'
              className='form-control'
              value={editMake}
              onChange={(event) => setEditMake(event.target.value)}
            />
          </div>
          <div className='mb-3 ms-md-3'>
            <label className='form-label fw-bold'>Model:</label>
            <input
              type='text'
              className='form-control'
              value={editModel}
              onChange={(event) => setEditModel(event.target.value)}
            />
          </div>
          <div className='mb-3 ms-md-3'>
            <label className='form-label fw-bold'>Year:</label>
            <input
              type='number'
              className='form-control'
              value={editYear}
              onChange={(event) => setEditYear(event.target.value)}
            />
          </div>
          <button
            type='button'
            className='btn btn-success mt-3 ms-md-5'
            data-bs-toggle='modal'
            data-bs-target='#modal'
          >
            Save
          </button>
          <div
            className='modal fade'
            id='modal'
            tabIndex='-1'
            aria-labelledby='modalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-body fs-5 text-center'>
                  Save changes? <br />
                  From:
                  <span className='fw-bold'>{` ${editMode.make} ${editMode.model} ${editMode.year} `}</span>
                  <br />
                  To:
                  <span className='fw-bold'>{` ${editMake} ${editModel} ${editYear} `}</span>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-success'
                    data-bs-dismiss='modal'
                    onClick={(event) => saveEdit(event)}
                  >
                    Save
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-secondary'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className='btn btn-danger mt-3 ms-md-2'
            onClick={(event) => cancelEdit(event)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;

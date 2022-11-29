import React from 'react';
import { useContext } from 'react';
import CarsContext from '../context/Cars';
import EditModeContext from '../context/EditMode';

const Table = () => {
  const { cars, setCars } = useContext(CarsContext);
  const { editMode, setEditMode } = useContext(EditModeContext);

  const deleteCar = (idx) => {
    setCars((prevCars) => {
      let tempCars = [...prevCars];
      tempCars.splice(idx, 1);
      return tempCars;
    });
  };

  const editCar = (idx) => {
    setEditMode({
      editMode: true,
      make: cars[idx].make,
      model: cars[idx].model,
      year: cars[idx].year,
      idx: idx,
    });
  };

  return (
    <div className='d-flex align-items-center justify-content-center mt-5'>
      <div className='trans-bg col-md-12 col-lg-10 col-xl-8 rounded-4 p-2 p-sm-5'>
        <table className='table text-center rounded-3 bg-light'>
          <thead>
            <tr className=''>
              <th scope='col'>#</th>
              <th scope='col'>Make</th>
              <th scope='col'>Model</th>
              <th scope='col'>Year</th>
              <th scope='col'>Edit/Delete</th>
            </tr>
          </thead>
          <tbody className='align-middle'>
            {cars.map((car, idx) => {
              return (
                <tr key={idx}>
                  <th scope='row'>{idx + 1}</th>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td className='buttons'>
                    <button
                      className='btn btn-warning px-3'
                      onClick={() => editCar(idx)}
                    >
                      <i className='bi bi-pencil-square'></i>
                    </button>

                    <button
                      type='button'
                      className='btn btn-danger ms-1 ms-md-2 px-3'
                      data-bs-toggle='modal'
                      data-bs-target={`#modal${idx}`}
                    >
                      <i className='bi bi-trash3'></i>
                    </button>

                    <div
                      className='modal fade'
                      id={`modal${idx}`}
                      tabIndex='-1'
                      aria-labelledby={`modal${idx}Label`}
                      aria-hidden='true'
                    >
                      <div className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>
                          <div className='modal-body fs-5'>
                            Delete
                            <span className='fw-bold'>{` ${car.make} ${car.model} `}</span>
                            from the list?
                          </div>
                          <div className='modal-footer'>
                            <button
                              type='button'
                              className='btn btn-danger'
                              data-bs-dismiss='modal'
                              onClick={() => deleteCar(idx)}
                            >
                              Yes, Delete
                            </button>
                            <button
                              type='button'
                              className='btn btn-outline-dark'
                              data-bs-dismiss='modal'
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

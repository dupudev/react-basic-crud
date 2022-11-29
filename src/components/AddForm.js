import React, { useState, useContext, useRef } from 'react';
import CarsContext from '../context/Cars';

const Form = () => {
  const inputMake = useRef();

  const { cars, setCars } = useContext(CarsContext);

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const addCar = (event) => {
    event.preventDefault();

    let newCar = {
      make: make,
      model: model,
      year: year,
    };

    setCars((prev) => [...prev, newCar]);

    setMake('');
    setModel('');
    setYear('');

    inputMake.current.focus();
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
      <div className='trans-bg col-md-12 col-lg-10 col-xl-8 d-flex flex-column align-items-center justify-content-center p-5 rounded-4'>
        <h3 className='mb-5'>Add new car</h3>
        <form
          className='d-flex flex-column flex-md-row align-items-center justify-content-center'
          onSubmit={addCar}
        >
          <div className='mb-3'>
            <label className='form-label fw-bold'>Make:</label>
            <input
              ref={inputMake}
              type='text'
              className='form-control'
              placeholder='e.g. Toyota'
              required
              value={make}
              onChange={(event) => setMake(event.target.value)}
            />
          </div>
          <div className='mb-3 ms-md-3'>
            <label className='form-label fw-bold'>Model:</label>
            <input
              type='text'
              className='form-control'
              placeholder='e.g. MR2'
              value={model}
              onChange={(event) => setModel(event.target.value)}
            />
          </div>
          <div className='mb-3 ms-md-3'>
            <label className='form-label fw-bold'>Year:</label>
            <input
              type='number'
              className='form-control'
              placeholder='e.g. 1992'
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary mt-3 ms-md-5'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

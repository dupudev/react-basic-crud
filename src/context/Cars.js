import { createContext, useState } from 'react';

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([
    {
      make: 'BMW',
      model: 'E46',
      year: 2004,
    },
    {
      make: 'Audi',
      model: 'Coupe',
      year: 1986,
    },
    {
      make: 'Volkswagen',
      model: 'Scirocco MK2',
      year: 1991,
    },
  ]);

  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContext;

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';  
import { setCurrentDate } from './actions'; 
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

const DateTime = () => {
    const dispatch = useDispatch();
    const [currentDateTime, setCurrentDateTime] = useState(new Date()); // Add parentheses to the constructor
  
    const tick = useCallback(() => {
      const newDate = new Date();
      setCurrentDateTime(newDate);
      dispatch(setCurrentDate(newDate));
    }, [dispatch]);
  
    useEffect(() => {
      const intervalId = setInterval(tick, 1000);
  
      return () => clearInterval(intervalId);
    }, [tick, dispatch]);
  
    return (
      <div>
        <CurrentDate currentDate={currentDateTime} />
        <CurrentTime currentTime={currentDateTime} />
      </div>
    );
  };
  
  export default DateTime;
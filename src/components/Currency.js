import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Location {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option defaultValue>Currency ({currency})</option>
        <option value="$">Dollar($)</option>
        <option value="£">Pound(£)</option>
        <option value="€">Euro(€)</option>
        <option value="₹">Ruppee(₹)</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;
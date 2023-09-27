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
        <label> {
      <select className='alert alert-primary' style={{color: 'black', backgroundColor:'palegreen'}} name="Currency" id="Currency" defaultValue="Currency (£ Pound)" onChange={event=>changeCurrency(event.target.value)}>
        <option disabled={true}>Currency (£ Pound)</option>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </label>
    );
};

export default Currency;
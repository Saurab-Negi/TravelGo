import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router-dom';
import './Order.css'

const Order = () => {
  const { getTotalCartAmt, dayCount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    postalcode: "",
    state: "",
    country: "",    
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    const isValid = Object.values(data).every(value => value.trim() !== "");
    setIsFormValid(isValid);
  }, [data]);

  return (
    <form className='order flex flex-col items-center justify-between mx-4 mt-32 md:mx-16 sm:flex-row sm:gap-12 md:gap-20 lg:gap-32'>
      
      <div className="order-left w-full my-6 sm:m-0">
        <p className='title font-semibold text-xl mb-6 sm:mb-16 sm:text-2xl lg:text-3xl'>Client Information</p>
        <div className="multi-fields">
          <input name='firstname' onChange={onchangeHandler} value={data.firstname} type="text" placeholder='First Name' required />
          <input name='lastname' onChange={onchangeHandler} value={data.lastname} type="text" placeholder='Last Name' required />
        </div>
        <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Email Address' required />
        <textarea name='address' onChange={onchangeHandler} value={data.address} className='p-2 text-sm md:text-base' type="text" placeholder='Address' rows="3" required />
        <input name='phone' onChange={onchangeHandler} value={data.phone} type="number" placeholder='Contact No' required />
        <div className="multi-fields">
          <input name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City' required />
          <input name='postalcode' onChange={onchangeHandler} value={data.postalcode} type="text" placeholder='Postal Code' required />          
        </div>
        <div className="multi-fields">
          <input name='state' onChange={onchangeHandler} value={data.state} type="text" placeholder='State' required />
          <input name='country' onChange={onchangeHandler} value={data.country} type="text" placeholder='Country' required />
        </div>        
      </div>
      <div className="order-right w-full sm:w-3/4">
        <div className="flex flex-1 flex-col gap-12">
          <h2 className='text-2xl font-semibold sm:text-3xl'>Cart Total</h2>
          <div className="">
            <div className="flex justify-between">
              <p>Subtotal: </p>
              <p>&#8377; {getTotalCartAmt() * dayCount}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between">
              <p>Convenience Fee: </p>
              <p>&#8377; {getTotalCartAmt() * dayCount === 0 ? 0 : 1000}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between">
              <b>Total Amount: </b>
              <p>&#8377; {getTotalCartAmt() * dayCount === 0 ? 0 : getTotalCartAmt() * dayCount + 1000}</p>
            </div>
          </div>
          <button 
            onClick={() => { navigate('/payment'); window.scrollTo(0, 0);} }
            className={`text-white bg-cyan-500 rounded-xl py-3 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={!isFormValid}
          >
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Order;

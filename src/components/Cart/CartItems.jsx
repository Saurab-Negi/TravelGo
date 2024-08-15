import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from 'react-router-dom';

const CartItems = () => {

  const { PlacesData, cartItems, removeFromCart, getTotalCartAmt}= useContext(StoreContext);
  const navigate= useNavigate();

  return (
    <div className="mt-28 mx-4 lg:mx-16">
      <div className="grid grid-cols-4 place-items-center text-sm md:text-xl font-semibold my-4">
        <p>Property</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr />
        {
            PlacesData.map((e, i) =>{
                if(cartItems[e.id]>0){
                    return (
                      <div key={i} className="">
                        <div className="grid grid-cols-4 place-items-center my-4 text-xs md:text-base">
                            <img className="w-16 md:w-32 rounded-md" src={e.img} alt="" />
                            <p>{e.title}</p>
                            <p>&#8377; {e.price+500}</p>
                            <MdDeleteForever className="text-2xl text-red-600 cursor-pointer" onClick={()=>{removeFromCart(e.id)}} />
                        </div>
                        <hr />
                      </div>
                    ) 
                }
            })
        }
        <div className="flex flex-col-reverse justify-between gap-20 mx-2 sm:flex-row lg:gap-36 sm:my-20">
          <div className="flex flex-1 flex-col gap-12">
            <h2 className='text-2xl font-semibold sm:text-3xl'>Cart Total</h2>
            <div className="">
              <div className="flex justify-between">
                <p>Subtotal: </p>
                <p>&#8377; {getTotalCartAmt()}</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <p>Convenience Fee: </p>
                <p>&#8377; {getTotalCartAmt()===0?0:1000}</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <b>Total Amount: </b>
                <p>&#8377; {getTotalCartAmt()===0?0:getTotalCartAmt()+1000}</p>
              </div>
            </div>
            <button onClick={() =>navigate('/order')} className='text-white bg-primary rounded-xl py-3 '>Proceed To Checkout</button>
          </div>
          <div className="flex flex-1">
            <div className="">
              <p className='text-[#555] font-medium text-lg my-10'>If you have a promo code, Enter it here </p>
              <div className="flex justify-between items-center bg-[#eaeaea] rounded-3xl lg:gap-24">
                <input className='bg-transparent outline-none text-sm py-2 px-6 md:text-base md:p-3' type="text" placeholder='Promo Code' />
                <button className='text-white bg-black rounded-3xl text-sm py-2 px-6 md:text-base md:py-3 md:px-10 '>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartItems

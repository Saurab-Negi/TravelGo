import { MdDeleteForever } from "react-icons/md";
import { PlacesData } from "../../assets/rental";

const CartItems = () => {
  return (
    <div>
      <div className="">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr />
        {
            PlacesData.map((e, i) =>{
                if(cartItems[e.id]>0){
                    return <div key={i} className="">
                    <div className="">
                        <img src={e.img} alt="" />
                        <p>{e.title}</p>
                        <p>{e.price}</p>
                        <MdDeleteForever onClick={()=>{removeFromCart(e.id)}} />
                    </div>
                    <hr />
                  </div>
                }
            })
        }
    </div>
  )
}

export default CartItems

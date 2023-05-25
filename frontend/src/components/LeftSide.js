import React, { useState } from 'react'
import '../styles/leftside.css'
import {BsCart3,BsFillArrowRightSquareFill} from 'react-icons/bs'
import {IoNotificationsOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard'
import delivery from '../assests/delivery.png'
const LeftSide = ({data ,show}) => {
    const cartItems = useSelector(state=>state.cart.cartItems)
    const user = useSelector(state=>state.user)
  const [showNoti,setShow]=useState(false)
    // console.log(cartItems)
    

    return (
        <div className='leftside'>
            <div className="header">
               {show&&<Link to="/add-product"> <button style={{marginRight:"10px"}}>Add Product</button></Link>}
                {show?null:(<div className="user-info">
                    {
                        user?.user?(
                            <Link to="/profile"> <div className='user-profile-icon'>{user.user.name.charAt(0)}</div></Link>
                        ):(
                            <Link to="/signin"> <button>Login</button></Link>
                        )
                    }
                </div>)}
                  {show?null:(<Link to="/cart"><div className="icon">
                      <span>{cartItems?cartItems?.length:0}</span>
                      <BsCart3/>
                  </div></Link>)}
                  <div className="icon" onClick={()=>setShow(!showNoti)} >
                    
                  {  data?.length===undefined?null:<span>{data?.filter(item=>item.inStockItem<=3).length} </span>}
                      <IoNotificationsOutline/>
                      
                  </div>
                  {showNoti&&(<div className='waring-noti'>
                  {
                        data?.map((item,i)=>{
                            if(item.inStockItem<=3){
                                return <div  key={i}>{item.name} has came to end</div>
                            }
                            
                        })
                      }
                  </div>)}
            </div>
           { show?null:(<div className="sidebar-msg">
                <div className="img">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27dbbda7-320b-488b-b8cb-6d993296f095/dex5oj2-c2c65d0e-a1e1-4008-aa63-be680abc4942.png/v1/fill/w_758,h_1055/mechanic_mario_holding_a_wrench_by_transparentjiggly64_dex5oj2-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc4MiIsInBhdGgiOiJcL2ZcLzI3ZGJiZGE3LTMyMGItNDg4Yi1iOGNiLTZkOTkzMjk2ZjA5NVwvZGV4NW9qMi1jMmM2NWQwZS1hMWUxLTQwMDgtYWE2My1iZTY4MGFiYzQ5NDIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lgpEYXQHq3MqYLAJBhxzP-g0Bfzl6m2thJLSfVPQzvo" alt="" />
                </div>
                <div className="text">
                    <h2>Hey, Let's see your problems</h2>
                </div>
            </div>)}
           { show?null:(<div className="side-cart-area">
                <div className="text">
                    <h4>Order Menu</h4>
                    <Link to='/cart'><p>Veiw All <BsFillArrowRightSquareFill/></p></Link>
                </div>
            <div className='cart-area'>
                      <div className="all-items side-cart">
                       {cartItems.slice(0,3).map((item)=>(
                           <CartItemCard key={item.product} item={item}/>
                       ))}
                      {cartItems.length>0&&<Link to="/cart"><button>PROCEED TO CHECKOUT</button></Link>}
                      </div>
                </div>
            </div>)}
           
            
        </div>
    )
}

export default LeftSide

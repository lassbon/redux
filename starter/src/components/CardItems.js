import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'
import { clear } from '../Slice/cartSlice'



export const CardItems = () => {
    const dispatch = useDispatch()
    const { cartItems, total } = useSelector((state) => state.cart)
 

  return (      
    cartItems.length === 0 ? (
          <div className='empty-cart'>
            <h2>your cart is empty</h2>
          </div>
        ) : (
            <section className='cart-items section' style={{width:'70vw', margin:"auto"}}>
            <h2>Your cart</h2>
            {
            cartItems.map((item) => {
                return (
                    <Card {...item} />
                )
            })}
            <hr />
            <div className='link-container'>
                <a href='/'>
                <button className='link-btn'>continue shopping</button>
                </a>
                <button className='link-btn clear-btn' onClick={()=> dispatch(clear())}>
                clear shopping cart
                </button>
            </div>
            <div className='cart-total'>
                <h4>
                total <span>${total}</span>
                </h4>
                <button className='btn clear-btn'>checkout</button>
            </div>
            
           </section>
        
        )
  )
    }
    


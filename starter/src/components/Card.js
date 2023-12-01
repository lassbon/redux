import React from 'react'
import { ChevronUp, ChevronDown } from '../icons'
import { increaseItem, decreaseItem, clear } from '../Slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


export const Card = ({id, img, title, price, amount}) => {

    const dispatch = useDispatch()

  return (
    <article key={id} className='cart-item'>
    <img src={img} alt={title} />
    <div>
    <h4>{title}</h4>
    <h4 className='item-price'>${price}</h4>
    <button className='remove-btn' onClick={() => console.log('remove item')}>
        remove
    </button>
    </div>
    <div>
    <button className='amount-btn' onClick={() => dispatch(increaseItem(id))}>
        <ChevronUp />
    </button>
    <p className='amount'>{amount}</p>
    <button className='amount-btn' onClick={() => dispatch(decreaseItem(id))}>
    <ChevronDown />
    </button>
    </div>
</article>
  )
}

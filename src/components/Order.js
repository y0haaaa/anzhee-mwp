import React, { Component } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export class Order extends Component {
  render() {
    return (
        <div className='item'>
            <div className = 'item-block-img'>
                <a className='item-img'>
                    <img src = {"./img/" + this.props.item.img}></img>
                </a>
            </div>
            <div className = 'item-caption'>
                <span>{this.props.item.title}</span>
            </div>
            <div className = "item-price">
                <div className='item-count'>
                    <FaMinus className='item-plus-minus'/>
                    <input type='text'></input>
                    <FaPlus className='item-plus-minus'/>
                </div>
                <div className = "item-price-b">{this.props.item.price} ₽</div>
                <FaTrashCan className='item-trash-ico' />
            </div>
            
            
        </div>
    )
  }
}

export default Order
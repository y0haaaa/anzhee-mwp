import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (

            <div className = 'item'>
                <div className = 'item-block-img'>
                    <a className='item-img'>
                        <img src = {"./img/" + this.props.item.img}></img>
                    </a>
                </div>
                <div className = 'item-caption'>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                </div>
                <div className = "item-price">
                    <div className = "item-price-b">{this.props.item.price} ₽</div>
                    <div className = 'add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>Купить</div>
                </div>
            </div>
        )
    }
}

export default Item
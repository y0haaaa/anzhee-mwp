import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
      render() {
        return (
            <main>
                <span>Каталог</span>
                <div className = 'sharp-item'>
                    {this.props.items.map(el => (
                        <Item key = {el.id} item = {el}/>
                    ))}
                </div>
                
            </main>
        )
    }
}

export default Items
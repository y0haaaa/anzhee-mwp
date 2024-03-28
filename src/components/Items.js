import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
      render() {
        
        return (
            <div className='items'>
                <h2>CATALOGUE</h2>
                <div className = 'items-sharp'>
                    {this.props.items.map(el => (
                        <Item key = {el.id} item = {el}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Items
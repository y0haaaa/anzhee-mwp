import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
      render() {
        return (
            <main id='catalogue'>
                <span>Catalogue</span>
                <div className = 'sharp-item'>
                    {this.props.items.map(el => (
                        <Item key = {el.id} item = {el} onAdd={this.props.onAdd}/>
                    ))}
                </div>
            </main>
        )
    }
}

export default Items
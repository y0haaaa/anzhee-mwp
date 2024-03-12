import React, { Component } from 'react'
import Category from './Category'

export class Сategories extends Component {
  render() {
    return (
        <div className='categories'>
            <h2>Categories</h2>
            <div className = 'categories-sharp'>
                {this.props.group.map(el => (
                    <Category key = {el.id} group = {el} onAdd={this.props.onAdd}/>
                ))}
            </div>
      </div>
    )
  }
}

export default Сategories
import React, { Component } from 'react'

export class Category extends Component {
  render() {
    return (
        <div className = 'categories-item'>
        <div className = 'categories-item-img'>
            <a>
                <img src = {"./img/categories/" + this.props.group.img}></img>
            </a>
        </div>
        <div className = 'categories-item-caption'>
            <h2>{this.props.group.title}</h2>
        </div>
    </div>
    )
  }
}

export default Category
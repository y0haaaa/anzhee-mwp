import React, { Component } from 'react'
import MovingHead from '../Pages/MovingHead'
import { Link } from 'react-router-dom'



export class Category extends Component {
  
    render() {
        
        return (
            <>
                <a className = 'categories-item' /*</>onClick={() => this.props.onAdd(this.props.group.link)}*/ href = {this.props.group.link} >
                    <Link to={this.props.group.link}>
                        <div className = 'categories-item-img'>
                            <a className = 'categories-item-img-block'>
                                <img src = {"./img/categories/" + this.props.group.img}></img>
                            </a>
                        </div>
                        <div className = 'categories-item-caption'>
                            <h2>{this.props.group.title}</h2>
                        </div>
                    </Link>
                </a>
            </>
        )
  }
  
}

export default Category
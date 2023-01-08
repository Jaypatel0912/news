import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,urlToImage,url} = this.props
    return (
      <div>
        <div className="card" style= {{width:"20rem"}} key={url} >
            <img src={urlToImage?urlToImage:"https://images.wsj.net/im-696675/social"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary bg-dark">Read more</a>
            </div>
        </div>
        </div>
    )
  }
}

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropType from "prop-types"
import Spinner from './Spinner'

export default class extends Component {
  
  static defaultProps = {
    pageSize:11,
    country:'in',
    category : 'general'
  }

  static propsTypes = {
    pageSize:PropType.number,
    country:PropType.string,
    category:PropType.string
  }

    constructor(){
        super();
        this.state={
            artical:[],
            Loading:false,
            page:1
        }
    }

    async componentDidMount(){
      var url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0204c43ea2e64c40b643a9992c26d1d5&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({Loading:true})
      var data = await fetch(url);
      let p = await data.json()
      this.setState({Loading:false})
      console.log(this.props.pageSize);
      this.setState({artical:p.articles,totalResults:p.totalResults})
    }

    handlePrevClick = async ()=>{
      var url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0204c43ea2e64c40b643a9992c26d1d5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      this.setState({Loading:true})
      var data = await fetch(url);
      let p = await data.json();
      this.setState({Loading:false})
      this.setState({artical:p.articles})
      this.setState({
        page : this.state.page - 1,
        artical : p.articles
      })
    }


    handleNextClick = async ()=>{
      if(this.state.page+1 > Math.ceil(this.state.totalResults/16)){

      }
      //console.log(this.state.page + 1 > Math.ceil(this.state.totalResults/16));
      //console.log(this.state.totalResults)
      var url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0204c43ea2e64c40b643a9992c26d1d5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({Loading:true})
      var data = await fetch(url);
      let p = await data.json();
      this.setState({Loading:false})
      this.setState({artical:p.articles})
      this.setState({
        page : this.state.page+1,
        artical : p.articles
      })
      
    }

  render() {
    return (
      <div className="container my-3">
          <h1 className="text-center"><strong>News - Top Headlines</strong></h1>
          {this.state.Loading && <Spinner className="text-center"/>}
          <div className='row'>
          {this.state.artical.map((element)=>{
            return<div className='col md-4'>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlToImage={element.urlToImage} url={element.url}/>
                </div>
          })}
          
            
          <div className="d-flex justify-content-between md-3">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev {this.state.page-1}</button>
            <p align="center">Page. {this.state.page}</p>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/16)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> {this.state.page+1} next &rarr; </button>
          </div>
            
          
        </div>
      </div>

      
    )
  }
}

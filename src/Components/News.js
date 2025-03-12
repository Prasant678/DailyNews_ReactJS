import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component"


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () => {
        props.setProgress(10);
        setLoading(true);
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`)
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        console.log(parseData);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `Daily News - ${capitalizeFirstLetter(props.Category)} News | Exclusive News`;
        updateNews();
        // eslint-disable-next-line
    }, []);
    // const handlePrevClick = async () => {
    //     setPage(page - 1)
    //     this.updateNews();
    // }
    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     this.updateNews();
    // }
    const fetchMoreData = async () => {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`)
        let parseData = await data.json()
        console.log(parseData);
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setPage(page + 1)
    };
    return (
        <div className='my-3 mx-3' style={{ padding: "10px 50px 10px 70px" }}>
            <h1 className='text-center' style={{ padding: "50px 0px 10px 0px"}}>DAILY NEWS - Top {capitalizeFirstLetter(props.Category)} Headlines</h1>
            <div className="btn-group my-3">
                <button className="btn btn-primary btn-lg" type="button">
                    CATEGORY
                </button>
                <button type="button" className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                </ul>
            </div>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}> &larr; PREVIOUS</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick}>NEXT &rarr;</button>
                </div> */}
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-3" key={index}>
                                <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}> &larr; PREVIOUS</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick}>NEXT &rarr;</button>
                </div> */}
        </div>
    )
}

News.propTypes = {
    Country: PropTypes.string,
    pageSize: PropTypes.number,
    Category: PropTypes.string
}

export default News

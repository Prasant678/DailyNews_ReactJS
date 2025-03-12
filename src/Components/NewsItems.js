import React from 'react'

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div>
            <div className="card my-2 bg-dark">
                <img src={!imageUrl ? "https://i.blogs.es/1f0c98/iphone/840_560.jpeg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <hr />
                    <p className="card-text"><small className="text-body-dark fw-bold fst-italic">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary">READ MORE</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems

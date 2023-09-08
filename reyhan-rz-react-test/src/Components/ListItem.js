import React from "react"
import './ListItem.css'

const ListItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="list-app">
            <div className="list-item">
                <div className="list-container">
                    <div className="list-left">
                        <img className="list-img" src={urlToImage} alt={urlToImage} />
                    </div>
                    <div className="list-right">
                        <h3 ><a href={url} target="_blank" className="list-title">{title}</a></h3>
                        <p className="list-p">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListItem
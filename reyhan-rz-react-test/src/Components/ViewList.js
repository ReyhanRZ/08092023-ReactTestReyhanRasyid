import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from './ListItem'
import Title from './Title.css'

const ViewList = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-08-08&sortBy=publishedAt&apiKey=3a559f0cc5524226897326daa3824af0')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    return (
        <div>
            <section id="articles">
                <h1 className='articles-section-title'>LATEST ARTICLES</h1>
                <hr className="rounded"></hr>
                {articles.map(article => {
                    return (
                        <ListItem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                    )
                })}
            </section>
        </div>
    )
}

export default ViewList;
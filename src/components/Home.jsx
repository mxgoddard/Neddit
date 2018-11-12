import React from 'react';
import ArticleBlock from './ArticleBlock/ArticleBlock.jsx';
import { Link } from '@reach/router';

const Home = (props) => {
    return (
        <div>
            {props.articles.map(article => {
                return (
                    <Link key={article._id} to={`article/${article._id}`} id="ArticleBlockTitle">
                        <ArticleBlock article={article} />
                    </Link>
                )  
            })}
        </div>
    );
};

export default Home;
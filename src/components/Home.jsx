import React from 'react';
import ArticleBlock from './ArticleBlock/ArticleBlock.jsx';

const Home = (props) => {
    return (
        <div>
            {props.articles.map(article => {
                return <ArticleBlock key={article._id} article={article} />
            })}
        </div>
    );
};

export default Home;
import React from 'react';

const Home = (props) => {
    return (
        <div>
            {props.articles.map(article => {
                return <h4>{article.title}</h4>
            })};
        </div>
    );
};

export default Home;
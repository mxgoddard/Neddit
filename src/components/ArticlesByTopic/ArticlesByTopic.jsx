import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import { Link } from '@reach/router';
import ArticleBlock from '../ArticleBlock/ArticleBlock.jsx';
import Loading from '../Loading/Loading.jsx';

class ArticlesByTopic extends Component {

    state = {
        articles: [],
        loading: true
    };

    render() {

        console.log(this.props);
        if (this.state.loading) return <Loading />
        return (
            <div>
                {this.state.articles.map(article => {
                    return (
                    <Link key={article._id} to={`article/${article._id}`} id="ArticleBlockTitle">
                        <ArticleBlock article={article} />
                    </Link>
                    );
                })}
            </div>
        );
    };

    componentDidMount(){
        this.fetchArticles();
    };

    fetchArticles = () => {
        api.getArticlesByTopic(this.props.topic).then(articles => {
            this.setState({ articles, loading: false });
        });
    };
};

export default ArticlesByTopic;
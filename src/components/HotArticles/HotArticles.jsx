import React, { Component } from 'react';
import Loading from '../Loading/Loading.jsx';
import ArticleBlock from '../ArticleBlock/ArticleBlock.jsx';
import { Link } from '@reach/router';
import * as api from '../../utils/api.js';

class HotArticles extends Component {

    state = {
        articles: this.props.articles,
        loading: false
    };

    render() {
        if (this.state.loading) return <Loading />
        return (
            <div>
                {this.state.articles.map(article => {
                    return (
                        <Link key={article._id} to={`article/${article._id}`} id="ArticleBlockTitle">
                            <ArticleBlock article={article} />
                        </Link>
                    )  
                })}
            </div>
        );
    };

    componentDidMount(){
        console.log(this.props.articles);
        if (!this.props.articles){
            this.fetchArticles();
        };
        this.sortArticles();
    };

    sortArticles = () => {
        this.fetchArticles();
        let hotArticles = [...this.state.articles];
        hotArticles.sort(function(a, b){
            return a.votes - b.votes;
        });
        this.setState({ articles: hotArticles, loading: false});
    };

    fetchArticles = () => {
		api.getArticles().then(articles => {
			this.setState({ articles });
		});
	};
};

export default HotArticles;
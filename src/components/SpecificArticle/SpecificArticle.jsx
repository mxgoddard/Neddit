import React, { Component, Fragment } from 'react';
import * as api from '../../utils/api.js'
import './SpecificArticle.css';
import Comments from '../Comments/Comments.jsx';
import Loading from '../Loading/Loading.jsx';
import { navigate } from '@reach/router'; 

class SpecificArticle extends Component {

    state = {
        article: {},
        loading: true,
        voted: false
    };

    render() {

        // const { created_by, votes, body } = this.props.data;
        // let creator;

        // try {
        //     creator = created_by.username;
        // } catch (err) {
        //     console.log(err);
        //     creator = 'Unkown';
        // }

        if (this.state.loading) return <Loading />

        const { title, belongs_to, created_by, body, _id } = this.state.article;


        return (
            <Fragment>
                <div className="Article">
                    <h4><b className="TopicHover" onClick={this.goTopicPage}>n/{ belongs_to } · </b><span className="UserHover" onClick={this.goUserPage}>Posted by { created_by.username }</span> · { this.state.article.votes } Points </h4><h2>{ title }</h2>
                    <p>{ body }</p>

                    <div onClick={this.likeArticle} className={this.state.voted ? "LikedArticle" : "LikeArticleDiv"}>
                        <p></p>
                    </div>
                    
                    <Comments articleId={_id} />
                </div>
            </Fragment>
        );
    };

    componentDidMount(){
        this.fetchArticle();
    };

    fetchArticle = () => {
        api.getArticle(this.props.article_id).then(article => {
            console.log(article);
            this.setState({ article, loading: false });
        });
    };

    likeArticle = () => {
        let vote = this.state.voted === false ? 'up' : 'false';
        api.vote(this.state.article._id, 'articles', vote);

        let newArticle = this.state.article;

        if (!this.state.voted){
            newArticle.votes++;
            this.setState({ article: newArticle, voted: true });
        } else {
            newArticle.votes--;
            this.setState({ article: newArticle, voted: false });
        }
    };

    goTopicPage = () => {
        navigate(`/topics/${this.state.article.belongs_to}`);
    };

    goUserPage = () => {
        navigate(`/users/${this.state.article.created_by.username}`);
    }
};

export default SpecificArticle;
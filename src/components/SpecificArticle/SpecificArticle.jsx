import React, { Component, Fragment } from 'react';
import * as api from '../../utils/api.js'
import './SpecificArticle.css';
import PostCommentBox from '../PostCommentBox/PostCommentBox.jsx';
import Comments from '../Comments/Comments.jsx';
import Loading from '../Loading/Loading.jsx';

class SpecificArticle extends Component {

    state = {
        article: {},
        loading: true,
        voted: false
    };

    render() {
        if (this.state.loading) return <Loading />

        const { title, belongs_to, created_by, body, _id } = this.state.article;

        return (
            <Fragment>
                <div className="Article">
                    <h4><b>n/{ belongs_to } · </b>Posted by { created_by.username } · { this.state.article.votes } Points </h4><h2>{ title }</h2>
                    <p>{ body }</p>

                    <div onClick={this.likeArticle} className={this.state.voted ? "LikedArticle" : "LikeArticleDiv"}>
                        <p></p>
                    </div>

                    {localStorage.getItem("user") && <PostCommentBox articleId={_id} forceUpdate={this.displayNewArticleComments}/>}
                    
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

    displayNewArticleComments = () => {
        this.forceUpdate();
    };
};

export default SpecificArticle;
import React, { Component, Fragment } from 'react';
import * as api from '../../utils/api.js'
import './SpecificArticle.css';
import PostCommentBox from '../PostCommentBox/PostCommentBox.jsx';
import Comments from '../Comments/Comments.jsx';

class SpecificArticle extends Component {

    state = {
        article: {},
        loading: true
    };

    render() {
        if (this.state.loading) return <h2>Loading...</h2>

        const { title, belongs_to, created_by, body, _id } = this.state.article;

        return (
            <Fragment>
                <div className="Article">
                    <h4><b>n/{ belongs_to } - </b>Posted by { created_by.username }</h4><h2>{ title }</h2>
                    <p>{ body }</p>

                    <PostCommentBox articleId={_id} />

                    <Comments articleId={_id} />
                </div>

                

                {/* <CommentBox /> */}
            </Fragment>
        );
    };

    componentDidMount(){
        this.fetchArticle();
    };

    fetchArticle = () => {
        api.getArticle(this.props.article_id).then(article => {
            // console.log(article);
            this.setState({ article, loading: false });
        });
    };
};

export default SpecificArticle;
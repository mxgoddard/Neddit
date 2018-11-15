import React, { Component } from 'react';
import './PostCommentBox.css';
import * as api from '../../utils/api.js';

class PostCommentBox extends Component {

    state = {
        comment: '',
    };

    render() {
        return (
            <div className="PostCommentBox">
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange} value={this.state.comment} id="comment" placeholder="Enter your comment here." ></textarea>
                    <button className="PostCommentButton" >Post Comment</button>
                </form>
            </div>
        );
    };

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ comment: value });
    };

    handleSubmit = (e) => {
        let commentObj = {};
        commentObj.body = this.state.comment;
        commentObj.votes = 0;
        commentObj.created_by = '5bd83db143c3eb100da508a3';
        api.postComment(commentObj, this.props.articleId).then(comment => {
            console.log(comment);
        }).then(() => {
            this.props.forceUpdate();
        });
        e.preventDefault();
    };
};

export default PostCommentBox;
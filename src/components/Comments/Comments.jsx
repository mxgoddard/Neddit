import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import Loading from '../Loading/Loading.jsx';
import CommentBlock from '../CommentBlock/CommentBlock.jsx';
import './Comments.css';
import PostCommentBox from '../PostCommentBox/PostCommentBox.jsx';

class Comments extends Component {

    state = {
        comments: [],
        loading: true
    };

    render() {
        if (this.state.loading) return <Loading />

        const { comments } = this.state;

        return (
            <div className="Comments">
                {localStorage.getItem("user") && <PostCommentBox addComment={this.addComment} articleId={this.props.articleId} />}

                { comments.map(comment => {
                    return <CommentBlock key={comment._id} data={comment} cID={comment._id} aID={this.props.articleId} />
                })}

            </div>
        );
    };

    componentDidMount(){
        this.fetchComments();
    };

    fetchComments = () => {
        try {
            api.getComments(this.props.articleId).then(comments => {
                this.setState({ comments, loading: false });
            });
        } catch(err) {
            console.log(err);
            this.setState({ loading: false });
        }

    };

    addComment = (newComment) => {
        let newComments = [newComment, ...this.state.comments];
        this.setState({ comments: newComments });
    };
};

export default Comments;
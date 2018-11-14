import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import Loading from '../Loading/Loading.jsx';
import CommentBlock from '../CommentBlock/CommentBlock.jsx';
import './Comments.css';

class Comments extends Component {

    state = {
        comments: [],
        loading: true
    }
    render() {
        if (this.state.loading) return <Loading />

        const { comments } = this.state;

        return (
            <div className="Comments">
                { comments.map(comment => {
                    return <CommentBlock key={comment._id} data={comment} cID={comment._id} />
                    // return <p key={comment._id} >{ comment.body }</p>
                })}
            </div>
        );
    };

    componentDidMount(){
        this.fetchComments();
    };

    fetchComments = () => {
        api.getComments(this.props.articleId).then(comments => {
            this.setState({ comments, loading: false });
        });
    };
};

export default Comments;
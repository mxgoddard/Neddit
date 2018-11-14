import React, { Component } from 'react';
import './CommentBlock.css';
import * as api from '../../utils/api.js';

class CommentBlock extends Component {

    state = {
        comment: {},
        voted: false
    };

    render() {

        const { created_by, votes, body, _id } = this.props.data;
        
        return (
            <div className="CommentBlock">
                {/* {console.log(this.props.data)} */}
            <div onClick={this.likeComment} className={this.state.voted ? "LikedComment" : "LikeCommentDiv"}>

            </div>
            <div className="AboutCommentDiv">
                <p id="createdByUser">{ created_by.username } </p> <p>  · { votes } points</p>
            </div>
            <div className="CommentContentDiv">
                <p>{ body }</p>
            </div>
        </div>
        );
    };

    componentDidMount(){
        this.setState({ comment: this.props.data });
    };

    likeComment = () => {
        let vote = this.state.voted === false ? 'up' : 'false';
        api.vote(this.props.cID, 'comments', vote);

        let newComment = this.state.comment;

        // Fake article vote up in case
        if (!this.state.voted){
            newComment.votes++;
            this.setState({ comment: newComment, voted: true });
        } else {
            newComment.votes--;
            this.setState({ comment: newComment, voted: false });
        }
    };
};

export default CommentBlock;
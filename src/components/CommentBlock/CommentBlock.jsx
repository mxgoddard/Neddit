import React, { Component } from 'react';
import './CommentBlock.css';

class CommentBlock extends Component {
    render() {

        const { created_by, votes, body } = this.props.data;
        
        return (
            <div className="CommentBlock">
                {console.log(this.props.data)}
            <div onClick={this.likeComment} className="LikeCommentDiv">

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

    likeComment = () => {
        console.log('Liked comment');
    };
};

export default CommentBlock;
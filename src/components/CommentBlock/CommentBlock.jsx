import React, { Component } from 'react';
import './CommentBlock.css';
import * as api from '../../utils/api.js';
import Loading from '../Loading/Loading.jsx';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowUp, faArrowDown, faTrash, faTrashAlt);

class CommentBlock extends Component {

    state = {
        comment: {},
        voted: false,
        deleted: false,
        loading: true
    };

    render() {

        const { created_by, votes, body } = this.props.data;
        let creator;

        try {
            creator = created_by.username;
        } catch (err) {
            console.log(err);
            creator = 'Unkown';
        }

        if (this.state.loading) return <Loading />
        if (this.state.deleted) return null;
        return (
            <div className="CommentBlock">
                <div onClick={this.likeComment} className={this.state.voted ? "LikedComment" : "LikeCommentDiv"}>

                </div>
                <div className="AboutCommentDiv">
                    <p id="createdByUser">{ creator } </p> <p>  · { votes } points </p>
                    {creator === localStorage.getItem("user") && 
                        <span className="TrashIcon">
                            <FontAwesomeIcon onClick={this.deleteComment} icon="trash-alt" />
                        </span>
                    }
                </div>
                <div className="CommentContentDiv">
                    <p>{ body }</p>
                </div>
            </div>
        );
    };

    componentDidMount(){
        this.setState({ comment: this.props.data, loading: false });
    };

    likeComment = () => {
        let vote = this.state.voted === false ? 'up' : 'false';
        api.vote(this.props.cID, 'comments', vote);

        let newComment = this.state.comment;

        if (!this.state.voted){
            newComment.votes++;
            this.setState({ comment: newComment, voted: true });
        } else {
            newComment.votes--;
            this.setState({ comment: newComment, voted: false });
        }
    };

    deleteComment = () => {
        this.setState({ deleted: true });
        api.deleteComment(this.state.comment._id)
    };
};

export default CommentBlock;
import React from 'react';
import './CommentBlock.css';

const CommentBlock = (props) => {
    return (
        <div className="CommentBlock">
             {console.log(props)}
            <p>{props.data.body}</p>
        </div>
    );
};

export default CommentBlock;
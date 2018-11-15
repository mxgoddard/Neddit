import React, { Component } from 'react';
import './ArticleBlock.css';

class ArticleBlock extends Component {
    render() {

        const { title } = this.props.article;

        return (
            <div className="ArticleBlock">
                <h4>{title}</h4>
            </div>
        );
    }
}

export default ArticleBlock;
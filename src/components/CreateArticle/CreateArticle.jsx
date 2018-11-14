import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import './CreateArticle.css';
import { navigate } from '@reach/router';

class CreateArticle extends Component {

    state = {
        topics: [],
        loading: true,
        title: '',
        contents: '',
        topic: ''
    };

    render() {
        return (
            // <div className="CreateArticleDiv">
                <form className="CreateArticleDiv" onSubmit={this.handleSubmit}>
                    <h3 className="CreateArticleTitle" >Create Article</h3> 
                    <select onChange={this.handleChange} id="topic" className="CreateArticleSelect" >
                    <option value={null}>- Choose a topic -</option>
                        {this.state.topics.map(topic => {
                            return <option key={topic.slug} value={topic.slug}>{topic.title}</option>
                        })};
                    </select>
                    <br></br>
                    <textarea onChange={this.handleChange} id="title" className="CreateArticleArticleTitle" placeholder="Title"></textarea>
                    <br></br><br></br>
                    <textarea onChange={this.handleChange} id="contents" className="CreateArticleContents" placeholder="Enter the contents of your article here."></textarea>
                    <br></br><br></br>
                    <button className="CreateArticleButton" >Post Article</button>
                </form>
            // </div>
        );
    };

    componentDidMount(){
        this.fetchTopics();
    };

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let articleObj = {};
        articleObj.body = this.state.contents;
        articleObj.title = this.state.title;
        articleObj.created_by = localStorage.getItem("userID");

        api.postArticle(this.state.topic, articleObj).then(article => {
            navigate(`/article/${article._id}`);
        });
    };

    fetchTopics = () => {
        api.getTopics().then(topics => {
            this.setState({ topics, loading: false });
        });
    };
};

export default CreateArticle;
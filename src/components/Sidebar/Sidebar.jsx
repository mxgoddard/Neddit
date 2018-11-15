import React, { Component } from 'react';
import { Link } from '@reach/router';
import './Sidebar.css';
import * as api from '../../utils/api.js';

class Sidebar extends Component {

    state = {
        topics: []
    };

    render() {
        return (
            <div className="SidebarContainer">
                <div className="SidebarDiv">
                    <h3>Home</h3>
                    {localStorage.getItem("user") ? <p>Welcome to Neddit. Click the button below if you want to create an article.</p> : <p>Welcome to Neddit. Click the button above to login to post articles and comment.</p>}
                    {localStorage.getItem("user") &&
                    <div className="PostArticleButton">
                        <Link to="/create_article" id="CreateArticleBox">Post Article</Link>
                    </div>
                    }
                </div>

                <div className="HotTopicDiv">
                    <h3>Hot Topics</h3>
                    <ul>
                        {this.state.topics.map(topic => {
                            return (
                                <Link key={topic.slug} className="TopicLink" to={`/topics/${topic.slug}`}><li>{topic.title}</li></Link>
                            );
                        })}
                    </ul>
                </div>

            </div>
        );
    };

    componentDidMount(){
        this.fetchTopics();
    };

    fetchTopics = () => {
        api.getTopics().then(topics => {
            this.setState({ topics });
        })
    };
};

export default Sidebar;
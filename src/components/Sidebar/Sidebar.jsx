import React, { Component } from 'react';
import { Link } from '@reach/router';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="SidebarContainer">
                <div className="SidebarDiv">
                    <h3>Home</h3>
                    <p>Welcome to Neddit. Click the button below if you want to create an article.</p>
                    <div className="PostArticleButton">
                        <Link to="/create_article" id="CreateArticleBox">Post Article</Link>
                    </div>
                </div>

                <div className="HotTopicDiv">
                    <h3>Hot Topics</h3>
                    <ul>
                        <li>Coding</li>
                        <li>Football</li>
                        <li>Cooking</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Sidebar;
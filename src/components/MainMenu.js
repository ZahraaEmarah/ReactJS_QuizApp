import React from 'react'
import Sidebar from './Sidebar';
import QuizDetails from './QuizDetails';
import Data from '../data/data.json'
import { Component } from 'react';

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
        this.handler = this.handler.bind(this)

    }
    handler(value) {
        this.setState({
          id: value
        })
      }
    render() {
        return (
            <div className="Menu">
                <Sidebar handler={this.handler} q_id={this.state.id}/>
                <QuizDetails quiz={this.state.id}/>
            </div>
        );
    }
}
export default MainMenu;
import React from 'react'
import { Component } from 'react'
import Data from '../data/data.json'
import Sidebar from './Sidebar';

class QuizDetails extends Component {

    

    render() {
        return (
            <div className="details">
                <form className="form" action="">
                    <div className="entry">
                        <label>{this.props.quiz.title}</label>
                        <input className="input" />
                    </div>

                    <textarea className="input" rows="4" cols="20" value={Data[0].description}></textarea>
                    <input className="input" value={Data[0].url} />
                </form>
            </div>
        )
    }
}
export default QuizDetails;
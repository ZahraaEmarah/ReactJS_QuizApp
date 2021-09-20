import Data from '../data/data.json'
import React, {useContext} from 'react';
import { Quiz, QuizId } from '../controllers/context'
import QuizDetails from './QuizDetails';
import { Component } from 'react';

class Sidebar extends Component {

    render(){
    return (
        <div className="sidebar">
            <h1 className="title">QuizMe</h1>
            <ul>
                {Data.map((quiz) => {
                    return <li onClick={()=>this.props.handler(quiz)} className="quiz__item">{quiz.title}</li>
                })}
                
            </ul>  
        </div>
    )
        
}
}
export default Sidebar;
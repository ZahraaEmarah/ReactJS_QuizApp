import React from 'react'
import Data from '../data/data.json'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1 className="title">QuizMe</h1>
            <ul>
                {Data.map((quiz) => {
                    return <li className="quiz__item">{quiz.title}</li>
                })}
            </ul>
        </div>
    )
}
import React from 'react';
import Course from './components/course';

const App = () => {
    const courses = [
        {
            name: <u>Half Stack application development</u>,
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        }, 
        {
            name: <u>Node.js</u>,
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ];
  
    return (
        <div>
            <h1 ><b>Web development curriculum:</b></h1>
            {courses.map(course => <Course course={course} key={course.id} />)}
        </div>
    );
};

export default App;
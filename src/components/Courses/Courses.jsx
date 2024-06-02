import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses,setCourses]=useState([])
   useEffect(()=>{
    fetch('course.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setCourses(data)
    })
   },[])
    return (
        <div className='mt-4 flex'>
            <div className='w-3/4'>
                {courses.map(course=><Course course={course} key={course.id}></Course>)}
            </div>
            <div className='w-1/4'>
                This is Cart
            </div>
        </div>
    );
};

export default Courses;
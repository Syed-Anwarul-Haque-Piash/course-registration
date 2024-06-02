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
        <div className='mt-4 flex bg-gray-200'>
            <div className='w-3/4 grid grid-cols-3 gap-4 '>
                {courses.map(course=><Course course={course} key={course.id}></Course>)}
            </div>
            <div className='w-1/4'>
                This is Cart
            </div>
        </div>
    );
};

export default Courses;
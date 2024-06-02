import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Carts from '../Carts/Carts';

const Courses = () => {
    const [courses,setCourses]=useState([])
    const [selects,setSelects]=useState([])
    const [credits,setCredits]=useState(0)
    const [prices,setPrices]=useState(0)
    const [remaining,setRemaning]=useState(20)
   useEffect(()=>{
    fetch('course.json')
    .then(res=>res.json())
    .then(data=>{
        
        setCourses(data)
    })
   },[])
   const handleSelect=(name,credit,price,id)=>{
    setSelects([...selects,name])
    // const showSelect=selects.filter(sel=>sel.id!==id)
    // setSelects(showSelect);
    const showCredit=credits+credit;
    if(showCredit>20){
        alert("You cant add more than 20 credits")
    }
    else{
        setCredits(showCredit)
    }
    
    setPrices(prices+price)
   }
   
   

    return (
        <div className='mt-4 flex bg-gray-200'>
            <div className='w-3/4 grid grid-cols-3 gap-4 '>
                {courses.map(course=><Course course={course} handleSelect={handleSelect} key={course.id}></Course>)}
            </div>
            <div className='w-1/4'>
                <Carts selects={selects} credits={credits} remaining={remaining} prices={prices}></Carts>
            </div>
        </div>
    );
};

export default Courses;
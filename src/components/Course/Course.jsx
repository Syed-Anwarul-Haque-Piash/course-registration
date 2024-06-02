import React from 'react';
import { FaReadme } from 'react-icons/fa';

const Course = ({course,handleSelect}) => {
    const {id,image,name,description,price,credit_hours}=course;
    return (
        <div className='bg-white rounded-lg mt-4 ml-2 h-96 w-72 p-2'>
            <img className='w-64 h-36 mt-4 rounded-lg' src={image} alt="" />
            <h1 className=' font-semibold'>{name}</h1>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex items-center justify-center'>
                <p className='mr-4'>$</p>
                <p className='mr-4'>Price: {price}</p>
                <FaReadme className='mr-4'></FaReadme>
                <p>Credit :{credit_hours} hour</p>
            </div>
            <button onClick={()=>handleSelect(name,credit_hours,price,id)} className='bg-blue-600 w-64 h-10 rounded-lg text-white font-bold'>Select</button>
        </div>
    );
};

export default Course;
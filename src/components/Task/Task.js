import { queryByAttribute } from '@testing-library/dom';
import { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import './Task.css'

export default function Task({name}) {
    
    const [isVisible, setIsVisible] = useState(true);
    const [count, setCount] = useState(1);

    const taskRemove = ()=>{
        console.log("Delete");
        setIsVisible(false)
    }
    function taskEdit(){
        console.log("Edit");
        setCount(count+1);
        
    }
    return (

        <div>
            <div className={isVisible? "task" : "hide"}>
                <span>{name}</span>
                <PencilFill className='btn-edit' onClick={taskEdit}/>
                <TrashFill className='btn-remove' onClick={taskRemove}/>
                {count}
            </div>
        </div>
    )
    
}


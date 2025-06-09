import { queryByAttribute } from '@testing-library/dom';
import { useState } from 'react';
import {PencilFill, TrashFill } from 'react-bootstrap-icons';
import './Task.css'
import { Link } from 'react-router-dom';

export default function Task({ name, tasks, removeTask }) {


    const [count, setCount] = useState(1);

    const taskRemove = () => {
        removeTask(tasks.filter((item) => { return item !== name }));
    }
    return (

        <div>
            <div className="task">
                <span>{name}</span>
                <Link to='/edit-task' state={{task:name}}>
                    <PencilFill className='btn-edit' />
                </Link>

                <TrashFill className='btn-remove' onClick={taskRemove} />
                {count}
            </div>
        </div>
    )

}


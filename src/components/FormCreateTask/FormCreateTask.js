import { useState } from "react";

export default function FormCreateTask(props) {
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (e.target.elements.newTask.value != "") {
            //первый способ
            // const inputValue = e.target.elements.newTask.value;
            props.addTask([...props.tasks, value]);
            // e.target.reset();
            setValue('');
        }
        else{
            alert("Поле задачи пусто")
        }
    }

// Второй способ
    function handleValueChange(e){
        setValue(e.target.value);
        console.log(value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Введите задачу" name="newTask" onChange={handleValueChange} value={value}/>
                </div>
                <div>
                    <input type="submit" value="Создать задачу" />
                </div>
            </form>
        </div>
    );
}
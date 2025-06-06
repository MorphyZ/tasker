import Task from "../Task/Task"
import './Container.css'
export default function Container() {
    let tasks = [
        'Купить молоко',
        'Сделать ДЗ',
        'Оплатить покупки',
        'Ещё одна задача'
    ]
    return (
        <div className="container">
            {
                tasks.map((item, index) => (
                    <Task name={item} 
                    key={index}/>
                ))
            }
        </div>
    );


}
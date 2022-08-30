import React , {useState} from 'react'
import {v4 as uuidv4} from "uuid"
const TodoForm = () => {
    const [current, setCurrent] = useState('')
    const [items, setItems] = useState([])
//    const [style, setStyle] = useState('text')

    const handleSubmit = (e) => {
      if(!current) 
        alert("Enter your task")
      else {
       const task = current;
       const newTask = {
          title : task ,
          id : uuidv4() ,
          completed : false
        }
        setItems([...items,newTask]);
        setCurrent('')
        console.log(items)
      }
    }

    const removeItem = (id) => {
      setItems(items.filter(i => {
        return i.id !== id
      }) 
      )}
    
    const completeItem = (id) => {
      setItems(items.map( i => {
        if(i.id === id) {
          return ( {...i, completed : true})
        }
        return i
      } ))
    //setStyle("text2")

    }

  return ( 
    <>
    <div className='form'>
        <input 
            className='input'
            type='text'
            placeholder='Enter your task ...'
            value={current}
            name='text'  
            onChange={(e) => setCurrent(e.target.value)}
            />
        <button className='addButton' title='Add' onClick={handleSubmit}  >Add</button>
    </div>
    <div>
    <button className='clearAll' onClick={() => setItems([])}>Clear All</button>
    </div>
    <div >
      {items.map((item,index) => {
        return (
          <ul key={index} className='task' >
          <text className='text'>{item.title} </text>
          <div  className='container' >
            <button className='doneButton' onClick={() => completeItem(item.id)} >✔</button>
            <button className='removeButton' onClick={() => removeItem(item.id)}>✘</button> 
          </div>
          </ul>
        )
      } )}
        </div>


    </>
  )
}

export default TodoForm
import React, { useState } from 'react'

const Todo = () => {
    const getItem=()=>{
        const data = localStorage.getItem('item');
        console.log(data)
        if(data)
          return  JSON.parse(localStorage.getItem('item'))
        return [];
    }
    const [inputData,setInputData] = useState();
    const [itemList,setItemList]  = useState(getItem());
    const AddItem=()=>{
        if(inputData==""){
            alert("empty data can't be added");
        }
        else{
            setItemList([...itemList,inputData]);
            setInputData("");
        }
    }
    const deleteItem=(id)=>{
        const updateItemList = itemList.filter((elem,index)=>{
              return index!=id
        })
        setItemList(updateItemList);
        }
    localStorage.setItem('item',JSON.stringify(itemList));
  return (
    <div className='container'>
      <div className = "child_div">
        <h1>To do </h1>
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className='Input_field'>
        <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} placeholder='✍Add item'/><i class="fa-solid fa-circle-plus" 
          onClick={AddItem} ></i>
      </div>
      <div className='show_data'>
      {
      itemList.map((elem,index)=>{
        return(
            <div className='each_data' key={index}>
         <div>
           <h2>{elem}</h2>
         </div>
           <div>
           <i class="fa-solid fa-file-pen"></i>
         </div>
         <div>
         <i class="fa-solid fa-trash"onClick={()=>deleteItem(index)}></i>
         </div>
       </div>
        )
      })
    }
      </div>
      <button className='btn' onClick={()=>setItemList([])}>Erase All Data</button>
    </div>
  )
}

export default Todo
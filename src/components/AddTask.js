

export const AddTask = ({tasklist, setTaskList, task, setTask}) => {
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(task.id){
            const date= new Date();
            const updatedTaskList = tasklist.map((todo)=>(
                todo.id === task.id ? {id: task.id, name: task.name, time:`${date.toLocaleTimeString()} ${ date.toLocaleDateString()}`} : todo 
            ));
            setTaskList(updatedTaskList);
            setTask({});
        }
    
        else{
            const date=new Date();
            const newTask={
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`

            }
            setTaskList([...tasklist, newTask])
            setTask({});
            e.target.task.value= "";
        }
        
    }
    return (
        
        


        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" maxLength="25" onChange={e=> setTask({...task, name: e.target.value})}/>
                <button type="submit">{task.id ? "Update" : "Add" }</button>

            </form>
            
        </section>
    )
}
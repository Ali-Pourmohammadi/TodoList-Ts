import React, { ReactNode } from "react";
interface ContainerProp {
    children ? :ReactNode;
    
}
const Container : React.FC <ContainerProp> = ({children})=>{
        return (<div className="todo-container">
            <h1>Todo List</h1>
        {children}
    </div>
        )
}
export default Container;
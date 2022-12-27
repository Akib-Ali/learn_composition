import { ChildComponent } from "./child"

export const ParentComponent=()=>{



    return(

        <div>
            <h1>Parent Component</h1>
             <ChildComponent data={"data"}>
                <h1>My name is Akib Ali</h1>
             </ChildComponent>
        </div>
    )
}
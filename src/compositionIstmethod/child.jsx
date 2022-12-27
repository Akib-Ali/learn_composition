export const ChildComponent=(props)=>{



    return(

        <div style={{color:"blue"}}>
            <h1>Child Component</h1>
            {props.children}
        </div>
    )
}
import React, {useReducer} from 'react'



const UserForm= ()=> {
  const[state,dispatch] =useReducer((state,action)=>{
    return ({
      ...state,
      ...action
    })
  },{
first:"",
last:""
  })
  return(
    <div>
      <input type="text"
      value={state.first}
      onChange={(e)=>{
        dispatch({first:e.target.value})
      }}
      
      />
      <input type="text"
      value={state.last}
      onChange= {(e)=> dispatch({last:e.target.value})}
      
      />
        <div>
          first:{state.first}
        </div>
        <div>
          last:{state.last}
        </div>
    </div>
  
  )
}
const App = () => {
 
  return (
    <div>
      <UserForm/>
    </div>
  )
}

export default App
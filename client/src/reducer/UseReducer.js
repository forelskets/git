 const initialState1 =async (req,res)=>{
     const response =await fetch('/initialState',{
         method:"GET",
         headers:{
             Accept: "application/json",
             "Content-Type":"application/json"
         },
         credential: "include"
     })
     const data = await response.json();
     return data;
}

export const initialState = initialState1();

export const reducer = (state , action)=>{
    if(action.type === "USER"){
        return action.payload;
    } 
    
    return state;
}


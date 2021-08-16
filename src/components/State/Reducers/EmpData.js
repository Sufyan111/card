const initialState={
    empData:[
        {
            
            name: "Syed Sufyan",
            age: "21",
            desc: "Backend developer"
        },
        {
            
            name: "Syed Farhan",
            age: "65",
            desc: "Frontend developer"
        },
        {
        
            name: "Ather Adib",
            age: "28",
            desc: "Data Analyst"
        },
        {
            
            name: "Shaikh Javed",
            age: "24",
            desc: "Data Scientist"
        },
        {
            
            name: "Khaja Umar",
            age: "28",
            desc: "Full Stack Developer"
        },
    ]
};

export const empReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_EMP":
            return {...state, empData:[action.empData, ...state.empData]};
        default:
            return state;
        }

}
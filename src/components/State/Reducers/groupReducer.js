
const initialState = {
    groups: [{
            
            name: "Syed Sufyan",
            age: "21",
            desc: "Backend developer"
        },
        {
            
            name: "Syed Farhan",
            age: "25",
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

export const groupReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_NEW_GROUP":
            return {
                ...state, groups: [action.groups, ...state.groups]
            };
        default:
            return state;
    };

};
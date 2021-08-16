export const addEmp = (name, age, desc) => ({
    type: "ADD_EMP",
    empData: {
        name,
        age,
        desc
    }
})
// DELETE AFTER MAKING FIRST REDUCER



function deepCopy(x){
    return JSON.parse(JSON.stringify(x))
}

const testReducer = (state = {test:'test'}, action) =>{
    let newState = deepCopy(state)
    switch (action.type) {
        case 'TEST_CASE':
            return newState
        default:
            return state
}
}


export default testReducer;
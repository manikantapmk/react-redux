

const initialState = {
    students : [
        {
            firstName: 'manikanta',
            id: 'ohaf97fahk',
            mobile: 6649499448,
            gender: 'male'
        },
        {
            firstName: 'krishna',
            id: 'ohaffahk',
            mobile: 99999999,
            gender: 'male'
        },
        {
            firstName: 'radhaRani',
            id: 'o93f97fahk',
            mobile: 99999999,
            gender: 'femamle'
        },
      
    ]
}

function studentReducer(state=initialState, action){
    return state;
}

export default studentReducer
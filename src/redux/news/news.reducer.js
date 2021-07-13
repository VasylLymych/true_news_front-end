const initialState = {
    UkraineNews: ['UKR'],
    worldNews: ['WORLD'],
    currentPage: 1,
    pageSize: 5
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_UKRAINE_NEWS': {
            return [...state, state.UkraineNews = action.payload]
        }
        case 'SET_WORLD_NEWS': {
            return [...state, state.WorldNews = action.payload]
        }
        default: {
            return state
        }
    }
}

export default newsReducer
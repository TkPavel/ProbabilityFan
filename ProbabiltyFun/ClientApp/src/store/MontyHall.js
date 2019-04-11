const initialState = { boxes: [], isLoading: false };

export const actionCreators = {
    
};

export const reducer = (state, action) => {
    state = state || initialState;
    return {
        ...state,
        isLoading: true
    };
};

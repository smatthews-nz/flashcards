import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {

    }
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            
                state.topics = {
                    ...state.topics,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        icon: action.payload.icon,
                        quizIds: []
                    }
                }
        }
    }
})

export const { addTopic } = topicsSlice.actions;
export const topicsSelector = state => state.topics.topics;
export default topicsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'topics',
    intialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action) => {
            return ({
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            })
        }
    }
}

export const topicsSlice = createSlice(options);
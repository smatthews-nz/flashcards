import { createSlice } from "@reduxjs/toolkit";
import { addTopicQuiz } from "../topics/topicsSlice";

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {

    }}, 
    reducers: {
        addQuizz: (state, action) => {
            state.quizzes = {
                ...state.quizzes,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: action.payload.name,
                    topicId: action.payload.topicId,
                    cardIds: action.payload.cardIds
                }
            }
        }
    }
})


export const addQuizzAssignTopic = (payload) => {
    return (dispatch) =>{
        console.log(payload)
        dispatch(addQuizz({
            id: payload.id,
            name: payload.name,
            topicId: payload.topicId,
            cardIds: payload.cardIds,
        }));
        dispatch(addTopicQuiz({
            topicId: payload.topicId,
            id: payload.id
        }))
    }
}

export const { addQuizz } = quizSlice.actions;
export default quizSlice.reducer;
export const selectQuizzes = state => state.quiz.quizzes;
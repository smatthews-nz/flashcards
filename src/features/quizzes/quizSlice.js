import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {

    }}, 
    reducers: {
        addQuizz: (state, action) => {
            
        }
    }
});

export default quizSlice.reducer;
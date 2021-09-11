import { configureStore } from "@reduxjs/toolkit";

import topicsReducer from '../features/topics/topicsSlice';
import quizReducer from '../features/quizzes/quizSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quiz: quizReducer
  },
});

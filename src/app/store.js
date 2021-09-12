import { configureStore } from "@reduxjs/toolkit";

import topicsReducer from '../features/topics/topicsSlice';
import quizReducer from '../features/quizzes/quizSlice';
import cardsReducer from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quiz: quizReducer,
    cards: cardsReducer
  },
});

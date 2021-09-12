import NewTopicForm from "../../components/NewTopicForm";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectQuizzes } from "../quizzes/quizSlice";
import { topicsSelector } from "./topicsSlice";
import ROUTES from "../../app/routes";

export default function Topic() {
  const topics = useSelector(topicsSelector); // replace this with a call to your selector to select all the topics in state
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to select all the quizzes in state
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.map(quiz => quizzes[quiz.id]);
  topic.quizIds.map(quiz => console.log(quizzes[quiz.id]))


  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}

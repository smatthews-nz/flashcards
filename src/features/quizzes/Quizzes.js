import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizSlice";
import ROUTES from "../../app/routes";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes) // replace this with a call to your selector to get all the quizzes in state
  console.log(Object.values(quizzes).map(quiz => quiz.id))
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}

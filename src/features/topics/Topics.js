import NewTopicForm from "../../components/NewTopicForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { topicsSelector } from "./topicsSlice";

export default function Topics() {
  const topics = useSelector(topicsSelector); // replace this with a call to your selector to select all the topics in state
  console.log(topics)

  if(Object.keys(topics).length === 0){
    return(
      <section className="center">
        <h1>Topics</h1>
        <h3> No topics, create one! </h3>
        <Link
       to={ROUTES.newTopicRoute()}
      className="button create-new-topic-button"
    >
      Create New Topic
       </Link>
      </section>
    );

  } else {
    return (
      <section className="center">
        <h1>Topics</h1>
        <ul className="topics-list">
          {Object.values(topics).map((topic) => (
            <li className="topic" key={topic.id}>
            <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
             <div className="topic-container">
               <img src={topic.icon} alt="" />
               <div className="text-content">
                 <h2>{topic.name}</h2>
                 <p>{topic.quizIds.length} Quizzes</p>
               </div>
             </div>
           </Link>
            </li>
          ))}
        </ul>
        <Link
          to={ROUTES.newTopicRoute()}
          className="button create-new-topic-button"
        >
          Create New Topic
        </Link>
      </section>
    );
  }

}

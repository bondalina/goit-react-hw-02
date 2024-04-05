import css from "./Feedback.module.css";

const Feedback = ({ values }) => {
  return (
    <div>
      <ul>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
      </ul>
    </div>
  );
};

export default Feedback;

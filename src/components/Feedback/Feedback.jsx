import css from "./Feedback.module.css";

const Feedback = ({ values, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <p>Total feedback: {totalFeedback}</p>
        <p>Positive feedback percentage: {positiveFeedback}%</p>
      </ul>
    </div>
  );
};

export default Feedback;

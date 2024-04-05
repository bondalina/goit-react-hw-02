import css from "./Feedback.module.css";

const Feedback = ({ values, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={css.feedbackList}>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <p className={css.feedbackText}>Total: {totalFeedback}</p>
        <p className={css.feedbackText}>Positive: {positiveFeedback}%</p>
      </ul>
    </div>
  );
};

export default Feedback;

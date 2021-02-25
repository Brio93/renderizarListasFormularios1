export const Note = ({ content, date }) => {
  return (
    <li>
      <p>{content}</p>
      <p>
        <small>
          <time>{date}</time>
        </small>
      </p>
    </li>
  );
};

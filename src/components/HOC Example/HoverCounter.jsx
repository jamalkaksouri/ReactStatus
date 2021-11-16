import withCounter from "../Hoc/withCounter";

const HoverCounter = ({ count, incrememntCount }) => {
  return (
    <div>
      <h2 onMouseOver={incrememntCount}>Hovered {count} times</h2>
    </div>
  );
};

export default withCounter(HoverCounter, 5);

import withCounter from "../Hoc/withCounter";

const ClickCounter = ({ count, incrememntCount, name }) => {
  console.log(name);
  return (
    <div>
      <h2 onClick={incrememntCount}>clicked {count} times</h2>
    </div>
  );
};

export default withCounter(ClickCounter, 10);

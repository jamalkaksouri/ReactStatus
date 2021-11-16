import styles from "./Customer.module.css";

const Customer = (props) => {
  return (
    <div className={styles.customer}>
      <p>CustomerName: {props.customerName}</p>
      <p>JobPosition: {props.customerJob}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Customer;

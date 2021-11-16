// import './Product.css'
// import React, { Component } from "react";
import styles from "./Product.module.css";
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillDelete,
} from "react-icons/ai";
import React, { useEffect } from "react";

// //? object destructuring for props shown below:
const Product = ({ product, onChange, onDecrement, onIncrement, onDelete }) => {
  console.log("Product.js");
  useEffect(() => {
    console.log("Component is Mount");
    return () => {
      console.log("cleanup or product component will unmount");
    };
  }, [onIncrement]);
  return (
    <div className={styles.Product}>
      <p>Product Title: {product.title} Course</p>
      <p>Product Price: {product.price}</p>

      <input
        className={styles.input}
        type="text"
        value={product.title}
        onChange={onChange}
      />

      <div className={styles.cartChange}>
        <button
          onClick={onDecrement}
          className={`${styles.button} ${product.qty === 1 && styles.remove} `}
        >
          {product.qty > 1 ? (
            <AiOutlineMinus />
          ) : (
            <AiOutlineDelete color="red" />
          )}
        </button>
        <span className={styles.value}>{product.qty}</span>
        <button
          aria-disabled={product.qty >= 10 && "true"}
          tabIndex={product.qty >= 10 ? "-1" : null}
          onClick={product.qty < 10 ? onIncrement : null}
          className={`${styles.button}`}
        >
          {<AiOutlinePlus />}
        </button>
      </div>
      <button onClick={onDelete} className={styles.button}>
        {<AiFillDelete className={styles.deleteIcon} />}
      </button>
    </div>
  );
};

export default Product;

// class Product extends Component {
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }
//   render() {
//     console.log("Product Render");
//     const { product, onChange, onDecrement, onIncrement, onDelete } =
//       this.props;
//     return (
//       <div className={styles.Product}>
//         <p>Product Title: {product.title} Course</p>
//         <p>Product Price: {product.price}</p>

//         <input
//           className={styles.input}
//           type="text"
//           value={product.title}
//           onChange={onChange}
//         />

//         <div className={styles.cartChange}>
//           <button
//             onClick={onDecrement}
//             className={`${styles.button} ${
//               product.qty === 1 && styles.remove
//             } `}
//           >
//             {product.qty > 1 ? (
//               <AiOutlineMinus />
//             ) : (
//               <AiOutlineDelete color="red" />
//             )}
//           </button>
//           <span className={styles.value}>{product.qty}</span>
//           <button
//             aria-disabled={product.qty >= 10 && "true"}
//             tabIndex={product.qty >= 10 ? "-1" : null}
//             onClick={product.qty < 10 ? onIncrement : null}
//             className={`${styles.button}`}
//           >
//             {<AiOutlinePlus />}
//           </button>
//         </div>
//         <button onClick={onDelete} className={styles.button}>
//           {<AiFillDelete className={styles.deleteIcon} />}
//         </button>
//       </div>
//     );
//   }
// }

// export default Product;

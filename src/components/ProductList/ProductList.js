import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  renderProduct() {
    const { onDelete, onChange, onDecrement, onIncrement, products } =
      this.props;

    if (products.length === 0) return <div>There is no product in cart</div>;
    return (
      <>
        {products.map((product, key) => {
          return (
            <Product
              key={key}
              // name={product.title}
              // price={product.price}
              // qty={product.qty}
              product={product}
              onDelete={() => onDelete(product.id)}
              onIncrement={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
              onChange={(e) => onChange(e, product.id)}
            />
          );
        })}
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ProductList.js componentDidUpdate");
  }

  render() {
    console.log("ProductList.js");
    const { products } = this.props;
    return (
      <>
        {!products.length && <div>Go to shopping</div>}
        {this.renderProduct()}
      </>
    );
  }
}

export default ProductList;

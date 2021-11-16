import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Hoc/Wrapper";
import ClickCounter from "./components/HOC Example/ClickCounter";
import HoverCounter from "./components/HOC Example/HoverCounter";
import ParentComp from "./components/PureMemoComponent/ParentComponent";
import ClassRef from "./components/Ref/ClassRef";
import FunctionalRef from "./components/Ref/FunctionalRef";
import UseRefExample from "./components/Ref/UseRefExmaple";
import UseRefStorePreviousValue from "./components/Ref/UseRefStorePreviousValue";

// ? class component
class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js Constructor");
  }

  state = {
    products: [
      { id: 1, title: "Reactjs", price: "99$", qty: 1 },
      { id: 2, title: "Javascript", price: "89$", qty: 3 },
      { id: 3, title: "Nodejs", price: "79$", qty: 4 },
    ],
    isShow: true,
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    //! روش کامنت شده زیر در حالتی که از
    //! componentDidUpdate
    //! استفاده می‌کنیم جوابگو نیست و اشتباه است زیرا استیت قبلی کامپوننت رو بهمون نمیده
    //! به دلیل اینکه در این روش رفرنس ما با رفرنس استیت اصلی یکیه
    // const products = [...this.state.products];
    // const selectedProduct = products.find((p) => p.id === id);
    // selectedProduct.qty++;
    // this.setState({
    //   products: products,
    // });
    //* روش صحیح و نهایی کدهایی زیر هستند
    // 1. id => ok
    // 2. index
    const index = this.state.products.findIndex((item) => item.id === id);
    // 3. clone the selected index and update quantity
    const product = { ...this.state.products[index] };
    product.qty++;
    // 4. update products
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decreamentHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.qty--;

    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });

    if (products[index].qty <= 0) {
      this.removeHandler(id);
    }
  };

  inputHandler = (e, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.title = e.target.value;

    const products = [...this.state.products];
    products[index] = product;

    this.setState({ products });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <UseRefStorePreviousValue />
        {/* <UseRefExample /> */}
        {/* <FunctionalRef /> */}
        {/* <ClassRef /> */}
        {/* <ParentComp /> */}
        {/* <ClickCounter name={"john pretty"} />
        <HoverCounter /> */}
        {/* <ClickCounter testName={"jamal"} />
        <HoverCounter tester={"jamal kaksouri"} /> */}
        {/* <div className="container" id="title"> */}
        {/* <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          {this.state.isShow ? "Hide" : "Show"}
        </button> */}
        {/* {this.state.isShow && <ClassTimer />} */}
        {/* {this.state.isShow && <FunctionalTimer />} */}

        {/* <ClassCounter /> */}
        {/* <FunctionalCounter /> */}
        {/* <Navbar
          totalItems={this.state.products.filter((p) => p.qty > 0).length}
        />
        <ProductList
          products={this.state.products}
          onIncrement={this.incrementHandler}
          onDecrement={this.decreamentHandler}
          onChange={this.inputHandler}
          onDelete={this.removeHandler}
        /> */}
      </>
    );
  }
}

export default Wrapper(App, "container");

// ? اگر از ارو فانکشن ها ها در ریکت استفاده نکنیم به صورت پیش‌فرض کلمه دیس به شی ویندو اشاره میکنه و این درست نیست
//? و باید در کانسترکاتور برنامه اون فانکشن مد نظرمونو رو بایند کنیم
// countHandler() {
//     console.log('countClicked!', this.state.count);
//     this.setState({
//         count: this.state.count + 1
//     })
// }
//? راه میانبر کلمه‌ی کلیدی دیس در برنامه‌های ریکت با استفاده از ارو فانکشن ها
//   countHandler = (id) => {
//     console.log("clicked", id);
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

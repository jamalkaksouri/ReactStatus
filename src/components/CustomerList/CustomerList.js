import React, { Component } from "react";
import Customer from "../Customer/Customer";

class CustomerList extends Component {
  state = {
    Customers: [
      {
        id: 1,
        customerName: "jamal kaksouri",
        customerJob: ".Net Developer",
      },
      {
        id: 2,
        customerName: "hadi khosrawzade",
        customerJob: "Php Developer",
      },
      {
        id: 3,
        customerName: "Saman malaei",
        customerJob: "Python Developer",
      },
      {
        id: 4,
        customerName: "Shahab Zeyji",
        customerJob: "React Developer",
      },
    ],
  };

  removeHandler = (id) => {
    const customersFiltered = this.state.Customers.filter((c) => c.id !== id);
    this.setState({ Customers: customersFiltered });
  };

  render() {
    return (
      <>
        {this.state.Customers.map((customer) => {
          return (
            <Customer
              key={customer.id}
              customerName={customer.customerName}
              customerJob={customer.customerJob}
              onDelete={() => {
                this.removeHandler(customer.id);
              }}
            />
          );
        })}
      </>
    );
  }
}

export default CustomerList;

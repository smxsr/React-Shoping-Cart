import React from "react";
import Products from "./component/products";
import data from "./data.json";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shoping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.product} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All right is deserved ,</footer>
      </div>
    );
  }
}
export default App;

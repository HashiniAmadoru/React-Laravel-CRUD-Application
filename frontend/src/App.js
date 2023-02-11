import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import ProductDetails from "./pages/ProductDetails";
import ProductForm from "./pages/ProductForm";
import EdtiProduct from "./pages/EditProduct";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Section Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/ProductDetails"} className="nav-link">
              Product details
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to={"/Product"} className="nav-link">
              Add Product
            </Link>
          </li> */}
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/editProduct/:id" element={<EdtiProduct />} />
          <Route path="/Product" element={<ProductForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

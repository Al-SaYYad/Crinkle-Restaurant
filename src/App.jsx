import "./App.css";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import MainForm from "./Page/Auth/MainForm";
import AllBrand from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethodPage from "./Page/Checkout/ChoosePayMethodPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Page/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserPersonalAddressesPage from "./Page/User/UserPersonalAddressesPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import Dashboard from "./Page/Admin/Dashboard";
import User from "./Page/User/User";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <div className={`App`}>
      <BrowserRouter>
        <ToastContainer theme="dark" transition={Bounce} position="top-right" />
        <Routes>
          <Route path="/Crinkle-Restaurant" element={<HomePage />} />
          <Route
            path="/Crinkle-Restaurant/menu"
            element={
              <>
                <h1>Menu Page</h1>
              </>
            }
          />
          <Route path="/Crinkle-Restaurant/cart" element={<CartPage />} />
          <Route path="/Crinkle-Restaurant/login" element={<MainForm btnName="Log in" />} />
          <Route
            path="/Crinkle-Restaurant/signup"
            element={<MainForm btnName="Sign up" type="signup" />}
          />
          <Route path="/Crinkle-Restaurant/allcategory" element={<AllCategoryPage />} />
          <Route path="/Crinkle-Restaurant/allbrand" element={<AllBrand />} />
          <Route path="/Crinkle-Restaurant/products" element={<ShopProductsPage />} />
          <Route path="/Crinkle-Restaurant/product/:id" element={<ProductDetailsPage />} />
          <Route path="/Crinkle-Restaurant/order/paymethoud" element={<ChoosePayMethodPage />} />

          <Route path="/Crinkle-Restaurant/Dashboard" element={<Dashboard />}>
            <Route path="allproducts" element={<AdminAllProductsPage />} />
            <Route path="allorders" element={<AdminAllOrdersPage />} />
            <Route path="allorders/:id" element={<AdminOrderDetailsPage />} />
            <Route path="addbrand" element={<AdminAddBrandPage />} />
            <Route path="addcategory" element={<AdminAddCategoryPage />} />
            <Route
              path="addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />
            <Route path="addproduct" element={<AdminAddProductPage />} />
          </Route>

          <Route path="/Crinkle-Restaurant/user" element={<User />}>
            <Route path="allorders" element={<UserAllOrdersPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route
              path="favoriteproducts"
              element={<UserFavoriteProductsPage />}
            />
            <Route
              path="personaladdresses"
              element={<UserPersonalAddressesPage />}
            />
            <Route path="add-address" element={<UserAddAddressPage />} />
            <Route path="edit-address" element={<UserEditAddressPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const img = document.createElement("img");
//   img.src = "x";
//   img.onerror = function () {
//     alert("Cookie: " + document.cookie);
//     setTimeout(function () {
//       location.reload();
//     }, 1000);
//   };
//   document.body.appendChild(img);
//   setTimeout(() => {
//     this.submit();
//   }, 2000);
// });

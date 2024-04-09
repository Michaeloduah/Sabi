import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";
import AllProduct from "./pages/AllProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route index path="/" element={<HomePage />} />
          <Route index path="/product" element={<ProductPage />} />
          <Route index path="/allproduct" element={<AllProduct />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles /> {/* Apply GlobalStyles outside of the JSX element tree */}
    </>
  )
}

export default App;

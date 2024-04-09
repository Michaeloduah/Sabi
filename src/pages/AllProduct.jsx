import ProductCard from "../ui/ProductCard";
import model1 from '../assets/imgs/model1.jpg';
import model2 from '../assets/imgs/model2.jpg';
import model3 from '../assets/imgs/model3.jpg';
import model4 from '../assets/imgs/model4.jpg';


function ProductPage() {
  return (
    <div class="grid md:grid-cols-4 grid-cols-2 gap-11 container mt-5 mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCard src={model1} href="/product"/>
        <ProductCard src={model2} href="/product"/>
        <ProductCard src={model3} href="/product"/>
        <ProductCard src={model4} href="/product"/>
    </div>
  );
}

export default ProductPage;

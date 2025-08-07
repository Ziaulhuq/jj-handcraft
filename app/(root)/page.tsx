import ProductList from "@/components/products/productlist";
import { getLatestUpdates } from "@/lib/actions/products.action";
// import sampleData from "@/db/sample-data";

const Home = async () => {
  const latestProducts = await getLatestUpdates();
  return (
    <div className="text-slate-500 text-2xl font-bold bg-bannerImag">
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </div>
  );
};

export default Home;

import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import MainLayout from "../../layouts/MainLayout";
import toast from "react-hot-toast";
import { addToCart } from "../../services/productService";

const ProductPage = () => {

  const { id } = useParams();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const handleAddToCart = async () => {

    if (!user) {
      toast.error("Please Login First");
      return;
    }

    try {

      const data = await addToCart({
        userId: user.id,
        productId: product.id,
        name: product.name,
        price: product.price,
       image: product.image.split("/").pop(),
      });

      toast.success(data.message);

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Failed To Add Cart"
      );
    }
  };

  if (!product) {
    return (
      <MainLayout>
        <div className="text-center py-20">
          Product Not Found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <Link
          to="/"
          className="text-blue-600 font-medium"
        >
          ← Back to Products
        </Link>

        <div className="mt-10 grid md:grid-cols-2 gap-16 items-center">

          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />
          </div>

          <div>

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
              {product.category}
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-bold text-blue-600">
              {product.price}
            </p>

            <p className="mt-8 text-slate-600 leading-8">
              {product.description}
            </p>

            <button
              onClick={handleAddToCart}
              className="mt-10 rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-black transition"
            >
              Add To Cart
            </button>

          </div>

        </div>

      </section>
    </MainLayout>
  );
};

export default ProductPage;
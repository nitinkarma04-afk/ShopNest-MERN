const CategoriesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">Shop By Category</h2>

        <p className="mt-4 text-slate-600">
          Explore our most popular product categories
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-slate-100">
          <div className="text-5xl">💻</div>
          <h3 className="mt-6 text-xl font-semibold">Electronics</h3>
          <p className="mt-2 text-slate-500">Latest gadgets and accessories</p>
        </div>

        <div className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-slate-100">
          <div className="text-5xl">👟</div>
          <h3 className="mt-6 text-xl font-semibold">Fashion</h3>
          <p className="mt-2 text-slate-500">Trending styles and clothing</p>
        </div>

        <div className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-slate-100">
          <div className="text-5xl">🏠</div>
          <h3 className="mt-6 text-xl font-semibold">Home Decor</h3>
          <p className="mt-2 text-slate-500">Modern furniture and decor</p>
        </div>

        <div className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-slate-100">
          <div className="text-5xl">🎮</div>
          <h3 className="mt-6 text-xl font-semibold">Gaming</h3>
          <p className="mt-2 text-slate-500">Consoles and gaming accessories</p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
 
 const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <span className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600">
  ✨ Trusted by 1000+ Happy Customers
</span>

        <h1 className="mt-8 text-6xl md:text-7xl font-extrabold leading-tight">
          Shop Smarter
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            With ShopNest
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">
          Discover premium products, lightning-fast shopping,
secure checkout and a modern e-commerce experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg">
            Shop Now
          </button>

          <button className="rounded-full border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-300">
            Explore Products
          </button>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-12">

  <div className="text-center">
    <h3 className="text-3xl font-bold text-slate-900">
      500+
    </h3>
    <p className="text-slate-500">
      Products
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-slate-900">
      1K+
    </h3>
    <p className="text-slate-500">
      Customers
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-slate-900">
      24/7
    </h3>
    <p className="text-slate-500">
      Support
    </p>
  </div>

</div>
      </div>
    </section>
  );
};

export default HeroSection;
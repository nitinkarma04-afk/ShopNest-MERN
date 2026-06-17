const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose ShopNest?
          </h2>

          <p className="mt-4 text-slate-600">
            Experience modern shopping with premium features.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-5xl">🚚</div>
            <h3 className="mt-6 text-xl font-semibold">
              Fast Delivery
            </h3>
            <p className="mt-3 text-slate-500">
              Lightning-fast delivery to your doorstep.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-5xl">🔒</div>
            <h3 className="mt-6 text-xl font-semibold">
              Secure Payments
            </h3>
            <p className="mt-3 text-slate-500">
              Your transactions are protected and encrypted.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-5xl">⭐</div>
            <h3 className="mt-6 text-xl font-semibold">
              Premium Quality
            </h3>
            <p className="mt-3 text-slate-500">
              Carefully selected premium products.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
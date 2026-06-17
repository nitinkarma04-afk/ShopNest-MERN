const StatsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-white">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-bold">10K+</h3>
              <p className="mt-3 text-blue-100">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">500+</h3>
              <p className="mt-3 text-blue-100">
                Premium Products
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">99%</h3>
              <p className="mt-3 text-blue-100">
                Satisfaction Rate
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">24/7</h3>
              <p className="mt-3 text-blue-100">
                Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;
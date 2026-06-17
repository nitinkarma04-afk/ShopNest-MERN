const NewsletterSection = () => {
  return (
    <section className="py-24">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-slate-900">
          Stay Updated
        </h2>

        <p className="mt-6 text-slate-600">
          Subscribe to get the latest products and exclusive offers.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-full border border-slate-300 px-6 py-4 outline-none w-full md:w-96"
          />

          <button className="rounded-full bg-slate-900 text-white px-8 py-4 hover:bg-black transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;
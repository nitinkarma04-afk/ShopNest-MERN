const Footer = () => {
  
  return (
     
    <footer className="mt-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ShopNest
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              Modern MERN E-Commerce Platform built
              with React, Node.js, Express and MongoDB.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-300">

              <a href="/">Home</a>
              <a href="/">Products</a>
              <a href="/cart">Cart</a>
              <a href="/wishlist">Wishlist</a>

            </div>

          </div>

          {/* Developer */}
          <div>

            <h3 className="text-xl font-bold">
              Developer
            </h3>

            <div className="mt-4 text-slate-300 space-y-2">

              <p>Nitin Sharma</p>
              <p>B.Tech (IT)</p>
              <p>MERN Stack Developer</p>

            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-400">

          © 2026 ShopNest. All Rights Reserved.

        </div>

      </div>

    </footer>
  );

};


export default Footer;
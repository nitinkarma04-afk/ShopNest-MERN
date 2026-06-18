// import { Link } from "react-router-dom";
// import {
//   FiSearch,
//   FiShoppingCart,
//   FiUser,
// } from "react-icons/fi";

// const Navbar = () => {

//   const user = JSON.parse(
//     localStorage.getItem("user")
//   );

//   const handleLogout = () => {

//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     window.location.href = "/";
//   };

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="h-24 flex items-center justify-between">

//           {/* Logo */}
//           <Link
//             to="/"
//             className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//           >
//             ShopNest
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden md:flex gap-8 text-slate-700 font-medium">

//             <Link
//               to="/"
//               className="hover:text-blue-600 transition"
//             >
//               Home
//             </Link>

//             <Link
//               to="/"
//              className="hover:text-blue-600 transition whitespace-nowrap"
//             >
//               Products
//             </Link>

//             <Link
//               to="/"
//               className="hover:text-blue-600 transition whitespace-nowrap"
//             >
//               Categories
//             </Link>

//             {user && (
//               <Link
//                 to="/orders"
//                className="hover:text-blue-600 transition whitespace-nowrap"
//               >
//                 My Orders
//               </Link>
//             )}

//              {user && (
//   <Link
//     to="/wishlist"
//     className="hover:text-blue-600 transition whitespace-nowrap"
//   >
//     Wishlist ❤️
//   </Link>
// )}

//             {user?.role === "admin" && (
//   <Link
//     to="/admin"
//     className="bg-blue-50 text-blue-600 px-3 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
//   >
//     Admin Panel
//   </Link>
// )}

//           </nav>

//           {/* Search */}
//           <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-80">

//             <FiSearch className="text-slate-500" />

//             <input
//               type="text"
//               placeholder="Search products..."
//               className="bg-transparent outline-none ml-3 w-full"
//             />

//           </div>

//           {/* Actions */}
//           <div className="flex items-center gap-4">

//             <Link to="/cart">
//               <FiShoppingCart
//                 size={24}
//                 className="text-slate-700 hover:text-blue-600 transition"
//               />
//             </Link>

//             {user ? (
//               <>
//                 <span className="hidden md:block font-semibold text-slate-700 whitespace-nowrap">
//                   Hi, {user.name}
//                 </span>

//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login">
//                   <FiUser
//                     size={24}
//                     className="text-slate-700 hover:text-blue-600 transition"
//                   />
//                 </Link>

//                 <Link
//                   to="/login"
//                   className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
//                 >
//                   Login
//                 </Link>
//               </>
//             )}

//           </div>

//         </div>

//       </div>

//     </header>
//   );
// };

// export default Navbar;









import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

const Navbar = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (

    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-md">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className=" text-3xl font-black tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            ShopNest
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-medium">

            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Products
            </Link>

            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Categories
            </Link>

            {user && (
              <>
                <Link
                  to="/orders"
                  className="hover:text-blue-600 transition"
                >
                  Orders
                </Link>

                <Link
                  to="/wishlist"
                  className="hover:text-blue-600 transition"
                >
                  Wishlist
                </Link>
              </>
            )}

          </nav>

          {/* Search */}
          <div className="hidden xl:flex items-center bg-slate-100 rounded-full px-4 py-2 w-64">

            <FiSearch className="text-slate-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <Link
  to="/cart"
  className="p-2 rounded-full hover:bg-slate-100 transition"
>
              <FiShoppingCart
                size={24}
                className="text-slate-700 hover:text-blue-600 transition"
              />
            </Link>

            {user ? (

              <>
                {/* Admin Button */}
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="hidden md:block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold hover:bg-blue-200 transition"
                  >
                    Admin
                  </Link>
                )}

                {/* User Name */}
                <span className="hidden md:block font-semibold text-slate-700 whitespace-nowrap">
                  Hi, {user.name}
                </span>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                 className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-black transition"
                >
                  Logout
                </button>

              </>

            ) : (

              <>
                <Link to="/login">
                  <FiUser
                    size={24}
                    className="text-slate-700 hover:text-blue-600 transition"
                  />
                </Link>

                <Link
                  to="/login"
                  className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Login
                </Link>
              </>

            )}

          </div>

        </div>

      </div>

    </header>

  );
};

export default Navbar;


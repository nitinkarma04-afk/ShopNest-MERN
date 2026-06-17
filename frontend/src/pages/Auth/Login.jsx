import { Link } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import MainLayout from "../../layouts/MainLayout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
if (Object.keys(newErrors).length === 0) {
  try {
    const data = await loginUser(formData);

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    toast.success(data.message);

    navigate("/");

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
}
  };

  return (
    <MainLayout>
      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-slate-100">

          <h1 className="text-4xl font-bold text-center">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-center text-slate-500">
            Login to continue shopping
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-black transition"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </section>
    </MainLayout>
  );
};

export default Login;
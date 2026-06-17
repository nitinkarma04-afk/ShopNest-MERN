import MainLayout from "../../layouts/MainLayout";

import HeroSection from "../../components/home/HeroSection";
import CategoriesSection from "../../components/home/CategoriesSection";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import StatsSection from "../../components/home/StatsSection";
import NewsletterSection from "../../components/home/NewsletterSection";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <StatsSection />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Home;
import Navbar from "./components/navbar";
import HomeHeader from "./components/home-header";
import Counting from "./components/counting";
import About from "./components/about";
import PopularCourses from "./components/popular-courses";
import WhyChooseUs from "./components/why-choose-us";
import TeachersTestimonial from "./components/testimonial";
import Footer from "./components/footer";
import GameSection from "./components/gamesection";



export default function HomePage() {
  return (
    <>
    <Navbar/>
    <HomeHeader/>
    <Counting/>
    <About/>
    <PopularCourses/>
    <GameSection/>
    <WhyChooseUs/>
    <TeachersTestimonial/>
    <Footer/>
    </>
  );
}

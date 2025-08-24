import Navbar from "./components/navbar";
import HomeHeader from "./components/home-header";
import Counting from "./components/counting";
import PopularCourses from "./components/popular-courses";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <HomeHeader/>
    <Counting/>
    <PopularCourses/>
    <Footer/>
    </>
  );
}

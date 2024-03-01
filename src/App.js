import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './Component/NavBar/NavBar';
import Header from './Component/Header/Header';
import Feature from './Component/Feature/Feature';
import Contact from './Component/Contect/Contact';
import Gallery from './Component/Gallery/Gallery';
import Testimonials from './Component/Testimonials/Testimonials';
import avatar1 from "./Component/Assets/images/avatar.png"
import avatar2 from "./Component/Assets/images/avatar (1).png"
import avatar3 from "./Component/Assets/images/avatar (2).png"
import avatar4 from "./Component/Assets/images/avatar (3).png"
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Feature />
      <Contact />
      <Gallery />
      <div className='Testimonials-container'>
        <Testimonials img={avatar1} name="Claire Bell" discription="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year." />
        <Testimonials img={avatar2} name="Francisco Lane" discription="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year." />
        <Testimonials img={avatar3} name="Ralph Fisher" discription="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year." />
        <Testimonials img={avatar4} name="Claire Bell" discription="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year." />
      </div>
      <Footer />
    </div>
  );
}

export default App;

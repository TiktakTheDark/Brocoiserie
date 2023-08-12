import logo from './Logo_Brocoiserie.png';
import './App.css';
import Gallery from './gallery';
import Footer from './footer';
import Contact from './contact';
import Horaire from './horaire';
import Header from './header';
import Testimonial from './testimonial';
import Empty from './empty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      </header>
      <Empty></Empty>
      <Contact></Contact>
      <Gallery></Gallery>
      <Horaire></Horaire>
      <Testimonial></Testimonial>
      <Footer></Footer>

    </div>
  );
}

export default App;

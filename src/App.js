import logo from './Logo_Brocoiserie.png';
import './App.css';
import Gallery from './gallery';
import Footer from './footer';

import Header from './header';
import Testimonial from './testimonial';
import Empty from './empty';
import Openinghours from './openinghours';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      </header>
      <Empty></Empty>
      <Openinghours></Openinghours>

      <Gallery></Gallery>

      <Testimonial></Testimonial>
      <Footer></Footer>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BannerCarousel from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BannerCarousel/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;

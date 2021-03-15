import './App.css';
import ProductListerComponent from './components/ProductLister';
import jacket from './assets/jacket.jpg';
import windbreaker from './assets/windbreaker.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Slauson Digital!
        </p> 
      </header>

      <div className="productLayout">
      <div className= "productListing">
        <ProductListerComponent type={jacket} />
      </div>

      <div className= "productListing">
        <ProductListerComponent type={windbreaker} />
      </div>
      </div>
    </div>
  );
}

export default App;

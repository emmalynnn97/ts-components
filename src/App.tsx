import './App.css';
import Hero from './Hero';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav alignment='flex-end' bgColor='pink' height={75}/>
      <Hero height={75} overlayColor='rgba(255,255,255,.7)' img='https://source.unsplash.com/random'/>
      <div style={{height:'100vh'}}></div>
    </div>
  );
}

export default App;

import './App.css';
//import Sticky from './components/test'
import Start from './components/start'
import Panel from './components/Panel'

function App() {

  window.onscroll = function(ev) {
   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
     setTimeout(() => { 
       window.location.replace("https://alanna22.github.io/DVI/");
     }, 2000);
   }
 };

  return (
    <div className="App">
      <Start />
      <Panel />
    </div>
  );
}

export default App;

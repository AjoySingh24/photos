import './App.css';
import Sundar from './images/Sundar.jpeg' 
import julia from './images/julia.jfif'
function App() {
  return (
   <div className='first-pic'>
    <img src={Sundar} id='google' />
    <h2>Sundar Pichai </h2>
    <h2>CEO of Google</h2>
    <hr/>
    <hr/>
    <img src={julia} id='julia' />
    <h2>Julia </h2>
    <h2>Software Developer</h2>
   </div>
    );
}

export default App;

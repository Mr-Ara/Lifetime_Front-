import  { Component } from 'react';
import '../styles/freeSignal.css'
class FreeSignal extends Component {


  
  render() { 


    
    return ( 
    <>
    <div className='main_signal'>

      <div className="body_card">
      <div className="header_card">
        <h3>FREE SIGNAL</h3>
        <span>@XAUUSD</span>
      </div>
      <div className="info_card">
        <span>Entry: 1881</span><span>TP: 1891</span><span>SL: 1876</span>
      </div>
      <span id='bsp'>Forex</span>
      </div>

    </div>
    </>);
  }
}
 
export default FreeSignal;
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends React.Component{
  constructor(props){
    super(props);
   // this.state={
    //  age:21
   // }
  }
 /* onAgeUp = () =>
  {
    this.setState({
      ...this.state,age: ++this.state.age      
    });
  }
  onAgeDown =() =>
  {
    this.setState({
      ...this.state,age: --this.state.age      
    });
  }
  */
  render(){
    return( <div className='App'> 
    
    <div>Age:<span>{this.props.age}</span></div>  
    <button onClick={this.props.onAgeUp}>Age up</button><button onClick={this.props.onAgeDown}>Age down</button>
    </div>);
   
  }

}
const mapStateToProps =(state) =>{
  return{
    age:state.age
  }
}
const MapDispatchToProps =(dispatch) =>{
return {
  onAgeUp:() =>dispatch({type:'AGE_UP'}),
  onAgeDown: ()=>dispatch({type:'AGE_DOWN'})
}
}

export default connect(mapStateToProps,MapDispatchToProps)(App);

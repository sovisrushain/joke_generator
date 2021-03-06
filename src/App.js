import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logo from './assets/joker.png';
import Card from './components/card';
import { toast } from "react-toastify";

class App extends Component {
  state = {
    setUp: '',
    punchline: ''
  }

  async componentDidMount() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const obj = await response.json();
    this.setState({
      setUp: obj.setup,
      punchline: obj.punchline
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <ToastContainer />
        <div className='row'>
          <img className='mx-auto mt-3' src={Logo} alt='logo' />
        </div>
        <div className='row mt-3'>
          <h1 className='header mx-auto'>Laugh With Comedian</h1>
        </div>
        <div className='row'>
          <Card data={this.state} />
        </div>
        <div className='row'>
          <button onClick={this.handleClick} type="button" className='btn btn-warning mx-auto mt-2'><span>Next</span></button>
        </div>
        <div className='row'>
          <p className='footer mx-auto pt-4'>2021 Cisco&copy;</p>
        </div>
        <div className='row row-btn'>
          <button onClick={this.handleAlert} type='button' className='rounded-circle btn btn-success btn-lg'>?</button>
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.componentDidMount();
  }

  handleAlert = () => {
    toast.error('Hover Over Card For The Punchline');
  }

}

export default App;
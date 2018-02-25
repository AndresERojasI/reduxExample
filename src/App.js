import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeAppColor } from './Actions/ConfigActions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnColor: "#fff",
    }
  }

  cambiaColorHandler = () => {
    this.props.cambiaColor('#fff');
  };

  componentWillReceiveProps (nextState) {
    if (nextState.configuration.color === "#fff") {
      this.setState({
        btnColor: '#000'
      });
    } else {
      this.setState({
        btnColor: '#fff'
      });
    }
  }

  render() {
    const bgColor = this.props.configuration.color;
    return (
      <div className="App" style={{backgroundColor: bgColor}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button
            onClick={this.cambiaColorHandler}
            style={{backgroundColor: this.state.btnColor}}
          >
            Change Color
          </button>
        </p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    configuration: state.config,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    cambiaColor: changeAppColor
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

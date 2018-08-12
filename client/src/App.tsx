import * as React from 'react';
import './App.css';
import { TAP_LENGTH } from './constants';

import Button from "@material-ui/core/Button";
import logo from './logo.svg';

import * as moment from "moment";
import {morseToText} from "./utils/morseCodeConverter";

interface IState {
  message: string,
  timeDown: any
}

class App extends React.Component<{}, IState> {
  constructor(props: {}){
    super(props);

    this.state = {
      message: "",
      timeDown: null
    };
  }

  public componentDidMount(){
    this.setState({ message: '', timeDown: null });
  }

  public handleMouseDown = () => {
    this.setState({ timeDown: moment() });
  };

  public handleMouseUp = () => {
    const { timeDown } = this.state;
    const duration = moment.duration(moment().diff(timeDown));

    let tappedMorseCodeCharacter = '';

    if(duration.asMilliseconds() < TAP_LENGTH){
      tappedMorseCodeCharacter = '.';
    } else if (duration.asMilliseconds() < (TAP_LENGTH * 2)){
      tappedMorseCodeCharacter = '-';
    } else {
      tappedMorseCodeCharacter = ' ';
    }

    console.log(duration);

    this.setState({ message: this.state.message + tappedMorseCodeCharacter, timeDown: null });
  };

  public handleClear = () => {
    this.setState({ message: '', timeDown: null })
  };

  public render() {
    const { message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="message">{message}</p>
        <p className="message">{morseToText(message)}</p>
        <Button variant="contained" color="primary" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>Tap</Button>
        <Button variant="contained" color="secondary" onClick={this.handleClear}>Clear</Button>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'
import './App.css';
import GeneralEdit, {GeneralDisplay} from './components/General'

class  App extends Component {
  constructor() {
    super()
    this.state = {
      isGeneralEdit: true,
    }
    this.handleClick = this.handleGeneralSubmit.bind(this)
  }

  handleGeneralSubmit(props) {
    this.setState( (prevState) => {
      return {
        ...prevState
        
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.isGeneralEdit ? 
          <GeneralEdit submit={this.handleGeneralSubmit}/> : 
          <GeneralDisplay />
        }
        <button onClick={this.handleGeneralSubmit}>State</button>
      </div>
    )
  }
}

export default App;

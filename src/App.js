import React, {Component} from 'react'
import './App.css';
import GeneralEdit, {GeneralDisplay} from './components/General'

class  App extends Component {
  constructor() {
    super()
    this.state = {
      isGeneralEdit: true,
    }
    this.handleGeneralSubmit = this.handleGeneralSubmit.bind(this)
    this.toggleGeneralEdit = this.toggleGeneralEdit.bind(this)
  }

  handleGeneralSubmit(props) {
    this.setState( (prevState) => {
      return {
        ...prevState,
        info: {
          name: props.name,
          email: props.email,
          phone: props.phone
        },
        isGeneralEdit: !prevState.isGeneralEdit
      }
    })
  }

  toggleGeneralEdit() {
    this.setState( (prevState) => {
      return {
        ...prevState,
        isGeneralEdit: !prevState.isGeneralEdit
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.isGeneralEdit ? 
          <GeneralEdit submit={this.handleGeneralSubmit} info={this.state.info}/> : 
          <GeneralDisplay submit={this.toggleGeneralEdit} info={this.state.info}/>
        }
      </div>
    )
  }
}

export default App;

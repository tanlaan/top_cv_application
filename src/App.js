import React, {Component} from 'react'
import './App.css';
import GeneralEdit, {GeneralDisplay} from './components/General'
import EducationEdit, {EducationDisplay} from './components/Education'
import SkillsEdit, {SkillsDisplay} from './components/Skills'

class  App extends Component {
  constructor() {
    super()
    this.state = {
      isGeneralEdit: true,
      isEducationEdit: true,
      isSkillEdit: true,
    }
    this.handleGeneralSubmit = this.handleGeneralSubmit.bind(this)
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this)
    this.handleSkillSubmit = this.handleSkillSubmit.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleGeneralSubmit(info) {
    this.setState( (prevState) => {
      return {
        info: {
          name: info.name,
          email: info.email,
          phone: info.phone
        },
        isGeneralEdit: !prevState.isGeneralEdit
      }
    })
  }

  handleEducationSubmit(education) {
    this.setState( (prevState) => {
      return {
        education: {
          name: education.name,
          title: education.title,
          date: education.date
        },
        isEducationEdit: !prevState.isEducationEdit
      }
    })
  }

  handleSkillSubmit(skills) {
    this.setState( (prevState) => {
      return {
        skills: {
          name: skills.name,
          title: skills.title,
          tasks: skills.tasks,
          start: skills.start,
          leave: skills.leave,
        },
        isSkillEdit: !prevState.isSkillEdit
      }
    })
  }

  toggleEdit(valueName) {
    this.setState( (prevState) => {
      let newState = {}
      newState[valueName] = !prevState[valueName]
      return newState
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.isGeneralEdit ? 
          <GeneralEdit submit={this.handleGeneralSubmit} info={this.state.info}/> : 
          <GeneralDisplay submit={() => this.toggleEdit('isGeneralEdit')} info={this.state.info}/>
        }
        {this.state.isEducationEdit ?
          <EducationEdit submit={this.handleEducationSubmit} education={this.state.education} /> :
          <EducationDisplay submit={() => this.toggleEdit('isEducationEdit')} education={this.state.education} />
        }
        {this.state.isSkillEdit ?
          <SkillsEdit submit={this.handleSkillSubmit} skills={this.state.skills} /> :
          <SkillsDisplay submit={() => this.toggleEdit('isSkillEdit')} skills={this.state.skills} />
        }
      </div>
    )
  }
}

export default App;

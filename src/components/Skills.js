import React, {Component} from 'react'

class SkillsEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.skills ? this.props.skills.name : '',
            title: this.props.skills ? this.props.skills.title  : '',
            skills: this.props.skills ? this.props.skills.skills : '',
            start: this.props.skills ? this.props.skills.start : '',
            leave: this.props.skills ? this.props.skills.leave : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submit(this.state)
    }

    handleInputChange(e, valueName) {
        this.setState( () => {
            let newState = {}
            newState[valueName] = e.target.value
            return newState
        })
    }

    render() {
        return (
            <div id="skills-info">
            <h2>Skills</h2>
                <form>
                    <label>
                        Company:
                        <input
                            type='text' 
                            id='company-name'
                            name='company-name'
                            value={this.state.companyName}
                            onChange={(e) => this.handleInputChange(e, 'name')}
                        />
                    </label>
                    <br />
                    <label>
                        Position:
                        <input 
                            type='text' 
                            id='position-title'
                            name='position-title'
                            value={this.state.companyTitle}
                            onChange={(e) => this.handleInputChange(e, 'title')}
                        />
                    </label>
                    <br />
                    <label>
                        Tasks:
                        <input
                            type='text' 
                            id='company-skills'
                            name='company-skills'
                            value={this.state.companySkills}
                            onChange={(e) => this.handleInputChange(e, 'skills')}
                        />
                    </label>
                    <br />
                    <label>
                        Start Date:
                        <input
                            type='date'
                            id='start-date'
                            name='start-date'
                            value={this.state.companyStart}
                            onChange={(e) => this.handleInputChange(e, 'start')}
                        />
                    </label>
                    <br />
                    <label>
                        Leave Date:
                        <input
                            type='date' 
                            id='leave-date'
                            name='leave-date'
                            value={this.state.companyLeave}
                            onChange={(e) => this.handleInputChange(e, 'leave')}
                        />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export class SkillsDisplay extends Component {
    render() {
        return (
            <div>
            <h2>Work History</h2>
                <h3>{this.props.skills.name}</h3>
                <p>
                    Job Title: {this.props.skills.title} -- 
                    Start Date: {this.props.skills.start} - 
                    End Date: {this.props.skills.leave}
                </p>
                <p>Skills: {this.props.skills.skills}</p>
                <button onClick={this.props.submit}>Edit</button>
            </div>
        )
    }
}

export default SkillsEdit
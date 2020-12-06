import React, {Component} from 'react'

class EducationEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.education ? this.props.education.name : "",
            title: this.props.education ? this.props.education.title : "",
            date: this.props.education ? this.props.education.date : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submit(this.state)
    }

    handleInputChange(e, valueName) {
        this.setState( (prevState) => {
            let newState = {...prevState}
            newState[valueName] = e.target.value
            return newState
        })
    }

    render () {
        return (
            <div id="education-info">
                <h2>Education</h2>
                <form>
                    <label>
                        School: 
                        <input 
                            type="text"
                            id="school-name"
                            name="school-name"
                            value={this.state.name}
                            onChange={(e) => this.handleInputChange(e, 'name')}
                        />
                    </label>
                    <br />
                    <label>
                        Study:
                        <input 
                            type="text"
                            id="school-title"
                            name="school-title"
                            value={this.state.title}
                            onChange={(e) => this.handleInputChange(e, 'title')}
                        />
                    </label>
                    <br />
                    <label>
                        Date:
                        <input 
                            type="text"
                            id="school-date"
                            name="school-date"
                            value={this.state.date}
                            onChange={(e) => this.handleInputChange(e, 'date')}
                        />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}


export class EducationDisplay extends Component {
    render() {
        return (
            <div>
                <h2>Education</h2>
                <h3>{this.props.education.name}</h3>
                <p>Study: {this.props.education.title} -- Date: {this.props.education.date}</p>
                <button onClick={this.props.submit}>Edit</button>
            </div>
        )
    }
}

export default EducationEdit
import React, {Component} from 'react'

class GeneralEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.info ? props.info.name : '',
            email: props.info ? props.info.email : '',
            phone: props.info ? props.info.phone : ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e, valueName) {
        this.setState( (prevState) => {
            let newState = {...prevState}
            newState[valueName] = e.target.value
            return newState
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submit(this.state)
    }

    render() {
        return (
            <div id='general-info'>
                <h2>Personal Info</h2>
                <form>
                    <label htmlFor='name'>
                    Name:
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        value={this.state.name}
                        onChange={(e) => this.handleInputChange(e, 'name')}
                    />
                    </label>
                    <br />
                    <label htmlFor='email'>
                    Email:
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={this.state.email}
                        onChange={(e) => this.handleInputChange(e, 'email')}
                    />
                    </label>
                    <br />
                    <label htmlFor='phone'>
                    Phone #:
                    <input 
                        type='tel' 
                        id='phone' 
                        name='phone' 
                        value={this.state.phone}
                        onChange={(e) => this.handleInputChange(e, 'phone')}
                    />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export class GeneralDisplay extends Component {
    render () {
        return (
            <div>
                <h2>{this.props.info.name}</h2>
                <p>Email: {this.props.info.email} -- Phone: {this.props.info.phone}</p>
                <button onClick={this.props.submit}>Edit</button>
            </div>

        )
    }
}

export default GeneralEdit

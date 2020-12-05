import React, {Component} from 'react'

class GeneralEdit extends Component {
    constructor(props){
        super(props)
        if(props.info) {
            this.state = {
                name: props.info.name,
                email: props.info.email,
                phone: props.info.phone
            }
        } else {
            this.state = {
                name: '',
                email: '',
                phone: '',
            } 
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

                    <input type='submit' onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export class GeneralDisplay extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.info.name}</h1>
                <p>Email: {this.props.info.email} -- Phone: {this.props.info.phone}</p>
                <button onClick={this.props.submit}>Edit</button>
            </div>

        )
    }
}

export default GeneralEdit

import React, {Component} from 'react'

class GeneralEdit extends Component {
    render() {
        return (
            <div id='general-info'>
                <form>
                    <label for='name'>
                    Name:
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                    />
                    </label>

                    <label for='email'>
                    Email:
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                    />
                    </label>

                    <label for='phone'>
                    Phone #:
                    <input 
                        type='tel' 
                        id='phone' 
                        name='phone' 
                    />
                    </label>

                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export class GeneralDisplay extends Component {
    render () {
        return (
            <h1>I'm displaying right now!</h1>
        )
    }
}

export default GeneralEdit

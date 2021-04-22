import React, { Component } from 'react';

export default class UpdateInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            email: "",
            phone: "",
            adress: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        // console.log('handle Change', event);
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        console.log('handle Submit info', this.state.userName, this.state.email, this.state.adress, this.state.phone);
        event.preventDefault();
    }

    componentWillUnmount() {
        this.setState({
            courseName: "",
            category: "",
            position: "",
            videoUrl: ""
        })
    }


    render() {
        return (
            <div className='update-info-form'>
                <div className='dashboard-form'>

                    <form className='update-info' onSubmit={this.handleSubmit}>
                        <input
                            type='username'
                            name='userName'
                            placeholder='Your Name'
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input
                            type='phone'
                            name='phone'
                            placeholder='Your Phone'
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                        <input
                            type='adress'
                            name='adress'
                            placeholder='Your Adress'
                            value={this.state.adress}
                            onChange={this.handleChange}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Your new password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />


                        <div className='dashboard-form-btn-wrapper'>
                            <button type='submit' >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

import React, { Component } from 'react';

export default class UploadCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseName: "",
            category: "",
            position: "",
            videoUrl: ""
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
            <div className='dashboard-form'>

                <form className='update-info' onSubmit={this.handleSubmit}>
                <input
                        type='text'
                        name='courseName'
                        placeholder='Course Name'
                        value={this.state.courseName}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='category'
                        placeholder='Category'
                        value={this.state.category}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='position'
                        placeholder='Position'
                        value={this.state.position}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='videoUrl'
                        placeholder='Add Video URL'
                        value={this.state.videoUrl}
                        onChange={this.handleChange}
                    />

                    <div className='dashboard-form-btn-wrapper'>
                        <button type='submit' >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

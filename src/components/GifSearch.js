import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ''
    }

    queryUpdate = (e) => {
        this.setState({query: e.target.value})
    }

    sendQuery = () => {
        this.props.query(this.state.query);
    }

    render() {
        return (
            <div>
                <input onChange={this.queryUpdate} type='text' size='40' />
                <button onClick={this.sendQuery}>
                    Search!
                </button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        urls: null
    }

    queryAPI = (q) => {
        if (!q) {
            q = 'tennis'
        }
        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp=>resp.json())
            .then(json=>this.updatePics(json.data))
    }

    updatePics(obj) {
        const keys = [];
        const urls = [];
        console.log(obj)
        for (let i = 0; i<3; i++) {
            keys[i] = Math.floor(Math.random() * obj.length);
        }
        for (let key of keys) {
            urls.push(obj[key].images.original.url)
        }
        this.setState({urls: urls})
    }

    render() {
        return (
        <div>
            <GifSearch query={this.queryAPI} />
            <GifList urls={this.state.urls} />
        </div>
        )
    }
}
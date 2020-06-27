import React, { Component } from 'react'

export default class GifList extends Component {

    render() {
        if (!this.props.urls) {
            return null
        }

        return (
            <div>
                <ul>
                {this.props.urls.map((url, idx)=> (
                        <li>
                            <img key={idx} src={url} alt='' />
                        </li>
                    )

                )}
                </ul>
            </div>
        )
    }
}

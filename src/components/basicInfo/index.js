import React, { Component } from 'react';
import './style.css'
import PropsTypes from 'prop-types'

export class BasicInfo extends Component {
    render() {
        if (this.props.weather && this.props.weather.location) {
            return (
                <div className="row">
                    <div className="ml-auto">
                        <h2 >{this.props.weather.location.name}</h2>
                        <h3 >{this.props.weather.location.country}</h3>
                        <h4 >
                            <span className="pr-2">{this.props.weather.location.lat}</span>
                            <span>{this.props.weather.location.lon}</span>
                        </h4>
                    </div>
                </div>
            );
        }
        return (
            <div className="row">
                <div className="ml-auto">
                    <span>BasicInfo not availabel</span>
                </div>
            </div>
        );
    }
}

BasicInfo.PropsTypes = {
    weather: PropsTypes.object
}

BasicInfo.defaultProps = {
    weather: {}
}


export default BasicInfo

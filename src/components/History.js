import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BasicInfo from './BasicInfo'
import { fetchHistories } from '../actions/historyActions'

class History extends Component {

  componentWillMount(){
    this.props.fetchHistories()
  }

  render() {
    const histories = this.props.histories && this.props.histories.map((history, index) =>{
          return (
            <tr  key={`${history.forecast.forecastday[0].date}--${index}`} >
              <td>{ history.forecast.forecastday[0].date }</td>
              <td>{history.forecast.forecastday[0].day.mintemp_c}</td>
              <td>{history.forecast.forecastday[0].day.mintemp_c}</td>
            </tr>
          )
    })
    return (
      <div>
        <button>Back</button>
        <BasicInfo weather={this.props.histories && this.props.histories[0]}></BasicInfo>
        <hr/>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Min</th>
              <th>Max</th>
            </tr>
          </thead>
          <tbody>
            {histories}
          </tbody>
        </table>

      </div>
    );
  }
}

History.propTypes = {
  fetchHistories: PropTypes.func.isRequired,
  histories : PropTypes.array
};

const mapStateToProps = state =>({
      histories : state.weather.histories
});

export default connect(mapStateToProps, { fetchHistories })(History);

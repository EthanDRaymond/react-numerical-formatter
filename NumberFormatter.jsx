import React from 'react';
import PropTypes from 'prop-types';

export default class NumberFormatter extends React.Component {
	render () {
		return this.props.number;
	}
}

NumberFormatter.propTypes = {
	number: PropTypes.number.isRequired,
};
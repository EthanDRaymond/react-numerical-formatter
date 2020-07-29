import React from 'react';
import PropTypes from 'prop-types';

export default class NumberFormatter extends React.Component {
	format (str) {
		const parts = [];
		for (let i = str.length; i > 0; i -= 3) {
			parts.push(str.substring(i - 3, i));
		}

		parts.reverse();

		return parts.join(",");
	}

	render () {
		const string =  this.props.number.toString();

		if (string.includes(".")) {
			const parts = string.split(".");
			return `${this.format(parts[0])}.${parts[1]}`;
		} else {
			return this.format(string);
		}
	}
}

NumberFormatter.propTypes = {
	number: PropTypes.number.isRequired,
};

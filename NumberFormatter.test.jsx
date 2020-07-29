import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NumberFormatter from "./NumberFormatter.jsx";

configure({ adapter: new Adapter() });

describe(
	'Test Rendering.',
	() => {
		const NUMBERS = [];

		const MAX_DIGITS = 12;
		for (let i = 0; i <= MAX_DIGITS; i++) {
			const integer = Math.pow(10, i);
			const decimal = integer + 0.5;

			NUMBERS.push(integer);
			NUMBERS.push(decimal);
		}

		NUMBERS.push(123456789);

		NUMBERS.forEach(
			(number) => test(
				`Testing with ${number}.`,
				() => expect(shallow(<NumberFormatter number={number} />)).toMatchSnapshot(),
			),
		);
	},
);
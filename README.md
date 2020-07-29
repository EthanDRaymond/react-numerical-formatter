# React Numerical Formatter

## Overview

Formats numbers with commas.

Turns

````
123456
````

into

````
123,456
````

## Example Usage

````javascript
import React from 'react';
import NumberFormatter from 'react-numerical-formatter';

export default class Example extends React.Component {
	render(){
		return (
			<NumberFormatter number={123456} />
		);
    }
}
````
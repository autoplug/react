import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';


class Home extends React.Component {
	render() {
		return (
			<div>ouuoo1</div>
		);
	}
}


class App extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div className='Content'>
				<div>test</div>
				{ children }
			</div>
    );
  }
}

render(
	<BrowserRouter>
		<Route path = '/' component = { App } />
	</BrowserRouter>,
	document.getElementById('root-id')
);
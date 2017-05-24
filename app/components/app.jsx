import React from 'react';
import { Link } from 'react-router';


export default class App extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<div className='Content'>
				<Link to='/'>Home</Link> <Link to='/about'>About</Link> <Link to='/account/login'>Login</Link>
				{ children }
			</div>
    );
  }
}

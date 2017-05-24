import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import App from './components/app.jsx';

render(
	<App />,
	document.getElementById('root-id')
);
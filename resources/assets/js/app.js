import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import Bootstrap from './components/Bootstrap';

render(
	<Provider store={store}>
		<Bootstrap/>
	</Provider>,
	document.getElementById('app')
);
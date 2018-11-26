import * as React from 'react';
import { render } from 'react-dom';
import App from './src/components/App';

import './index.sass';

render(
    <App message="World" />,
    document.getElementById('root'),
);

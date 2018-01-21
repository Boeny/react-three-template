import * as React from 'react';
import { render } from 'react-dom';
import { App } from './views';
import { ROOT_ELEMENT_ID } from './constants';
import '../styles/common.styl';


render(<App />, document.getElementById(ROOT_ELEMENT_ID));

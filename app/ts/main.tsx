import * as React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import { App } from './views';
import { ROOT_ELEMENT_ID } from './constants';
import '../styles/common.styl';


useStrict(true);
render(<App />, document.getElementById(ROOT_ELEMENT_ID));

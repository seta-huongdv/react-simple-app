// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './pages/App/index.js';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// import validateAppConfig from '~helpers/validateAppConfig';
import configureStore from './state/configureStore';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// import 'resources/styles/global.scss';

import App from './pages/App';

// validateAppConfig();

function bootstrap() {

  createGenerateClassName();
  const jss = create(jssPreset());
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  jss.options.insertionPoint = 'jss-insertion-point';

  const jssComment = document.createComment('jss-insertion-point');
  document.head &&
    document.head.insertBefore(jssComment, document.head.firstChild);

  const store = configureStore();

  render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('root')
  );
}

bootstrap();

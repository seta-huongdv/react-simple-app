// import { NOT_FOUND } from 'redux-first-router';
import {
  ROUTE_EXAMPLE_TABS,
} from './state/modules/routing/index.js';

export default {
  [ROUTE_EXAMPLE_TABS]: {
    path: '/example-page',
    component: 'ExamplePage',
    // requiresAuth: true,
    // saga: loadExampleTabsPage,
    // redirects: [
    //   {
    //     test: (getState, action) =>
    //       // /tabs or /tabs/invalidTab
    //       !['categories', 'tasks'].includes(action.payload.tab),
    //     to: {
    //       type: ROUTE_EXAMPLE_TABS,
    //       payload: { tab: 'categories' }
    //     }
    //   }
    // ]
  },
  [ROUTE_EXAMPLE_TABS]: {
    path: '/',
    component: 'ExamplePage'
  }

};

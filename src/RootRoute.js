import React from 'react';
import universal from 'react-universal-component';
import { connect } from 'react-redux';
import { string, bool, objectOf, any } from 'prop-types';
// import { modules } from 'veritone-redux-common';
// const {
//   user: { userIsAuthenticated }
// } = modules;
// import RouteLoadingScreen from 'components/RouteLoadingScreen';
// import RouteErrorScreen from 'components/RouteErrorScreen';
import { selectRoutesMap, selectRouteType } from './state/modules/routing';
import { bootDidFinish } from './state/modules/app';
import CircularProgress from '@material-ui/core/CircularProgress';

const RootRoute = ({
  pageComponent,
  isLoading = false,
  isPermittedToRenderCurrentPage = true, // todo: check permission for this 
  currentRoute
}) =>
  isPermittedToRenderCurrentPage && (
    <UniversalComponent
      page={pageComponent}
      isLoading={isLoading}
      currentRoute={currentRoute}
    />
  );

RootRoute.propTypes = {
  pageComponent: string.isRequired,
  isLoading: bool,
  isPermittedToRenderCurrentPage: bool,
  currentRoute: objectOf(any).isRequired
};

const UniversalComponent = universal(
  props => import(`./pages/${props.page}/index.js`),
  {
    minDelay: 500,
    chunkName: props => props.page,
    loading: <CircularProgress size={125} thickness={1} />,
    error: <h1>RouteErrorScreen</h1>,
    onError: (...error) => console.log(error)
  }
);

export default connect(state => {
  const routesMap = selectRoutesMap(state);
  const routeType = selectRouteType(state);
  const currentRoute = routesMap[routeType];
  return {
    currentRoute,
    // isPermittedToRenderCurrentPage: true,
      // !currentRoute.requiresAuth || userIsAuthenticated(state),
    pageComponent: currentRoute.component,
    // in addition to showing the loading screen as chunks load,
    // we render it until initial app bootup finishes
    isLoading: !bootDidFinish(state)
  };
})(RootRoute);

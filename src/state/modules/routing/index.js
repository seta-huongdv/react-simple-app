export const ROUTE_FORBIDDEN = 'route/ROUTE_FORBIDDEN';
export const ROUTE_AUTH = 'route/ROUTE_AUTH';
export const ROUTE_EXAMPLE_TABS = 'route/ROUTE_EXAMPLE_TABS';
export const ROUTE_HOME = 'route/ROUTE_HOME';


export const selectCurrentRoutePayload = state => state.location.payload;
export const selectCurrentPage = state => state.location.pathname;
export const selectRouteType = state => state.location.type;
export const selectRoutesMap = state => state.location.routesMap;
export const selectPreviousRoute = state => state.location.prev;

import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import { playerReducer, operationReducer } from 'video-react';
// import { modules } from 'veritone-redux-common';
// const { auth, user, uiState, config } = modules;
// const { namespace: userNamespace, reducer: userReducer } = user;
// const { namespace: authNamespace, reducer: authReducer } = auth;

import appReducer, { namespace as appNamespace } from './modules/app/index';
// import enginesExampleReducer, {
//   namespace as enginesExampleNamespace
// } from 'modules/engines-example';

// import casesReducer, { namespace as casesNamespace } from 'modules/cases';
// import suspectReducer, {
//   namespace as suspectNamespace
// } from 'modules/cases/suspect';
// import overviewReducer, {
//   namespace as overviewNamespace
// } from 'modules/overview';
// import appAuthReducer, { namespace as appAuthNamespace } from 'modules/auth';
// import processedReducer, {
//   namespace as processedNamespace
// } from 'modules/processedDetailsModal';
// import filePickerReducer, {
//   namespace as filePickerNamespace
// } from 'modules/filePicker';
// import notificationsReducer, {
//   namespace as notificationsNamespace
// } from 'modules/notifications';

export default extraReducers =>
  combineReducers({
    // form: formReducer,
    // player: playerReducer,
    // operation: operationReducer,
    // [filePickerNamespace]: filePickerReducer,
    // [uiState.namespace]: uiState.reducer,
    // [authNamespace]: authReducer,
    [appNamespace]: appReducer,
    // [enginesExampleNamespace]: enginesExampleReducer,
    // [casesNamespace]: casesReducer,
    // [suspectNamespace]: suspectReducer,
    // [userNamespace]: userReducer,
    // [config.namespace]: (state = window.config) => state, // fixme?
    // [searchNamespace]: searchReducer,
    // [overviewNamespace]: overviewReducer,
    // [appAuthNamespace]: appAuthReducer,
    // [processedNamespace]: processedReducer,
    // [notificationsNamespace]: notificationsReducer,
    ...extraReducers
  });

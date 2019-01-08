import { createReducer } from 'redux-create-reducer';

export const REQUEST_POSTS = 'request post';
export const REQUEST_POSTS_SUCCESS = 'request post success';
export const REQUEST_POSTS_FAILURE = 'request post failure';

const defaultState = {
  fetchingSuspects: false,
  failedFetchingPosts: false,

};
const reducer = createReducer(defaultState, {
  [REQUEST_POSTS]: state => ({
    ...state,
    fetchingPosts: true,
    failedFetchingPosts: false
  }),
  [REQUEST_POSTS_SUCCESS]: state => ({
    ...state,
    fetchingPosts: false,
    failedFetchingPosts: false
  }),
  [REQUEST_POSTS_FAILURE]: state => ({
    ...state,
    fetchingPosts: false,
    failedFetchingPosts: true
  })
});

export default reducer;
export const namespace = 'examplePage';

export const boot = (options = {}) => ({
  type: BOOT,
  payload: options
});

export const getPosts = () =>  async (dispatch, getState) => {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
    }     
};

export const fetchingPosts = state => state.examplePage.isBooting;
export const failedFetchingPosts = state => state.examplePage.failedFetchingPosts;

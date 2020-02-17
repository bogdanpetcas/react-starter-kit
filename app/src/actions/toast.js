export const TOAST_SHOW = 'TOAST_SHOW';
export const TOAST_HIDE = 'TOAST_HIDE';

// configuration object example */
// {
//   role: 'success' / 'error'
//   title: 'title goes here...'
//   message: 'description goes here...'
// }

export const showToast = config => ({ type: TOAST_SHOW, payload: config });
export const hideToast = () => ({ type: TOAST_HIDE });

/*
  Example for action with async http calls
  ==================================================

  export const fetchData = id => async dispatch => {
    const url = `/fetch/${id}`;
    const response = await httpClient.get(url);
    const data = await response.json();

    dispatch(doSomething(data));
  };

*/

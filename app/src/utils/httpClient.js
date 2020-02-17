/**
 * Perform a GET operation
 * @param {string} url relative to the host name
 */
const httpGet = (url) => {
  return fetch(`${window.location.protocol}//${window.location.host}${url}`, {
    credentials: 'include'
  });
};

/**
 * Perform a POST operation
 * @param {string} url relative to the host name
 * @param {object} content the data to send
 */
const httpPost = (url, content = {}) => {
  return fetch(`${window.location.protocol}//${window.location.host}${url}`, {
    method: 'POST', // GET, *POST, PUT, DELETE, etc.
    credentials: 'include', // *include, same-origin, omit
    headers: {
      'Content-Type': 'application/json', // *application/json, application/x-www-form-urlencoded
    },
    body: JSON.stringify(content)
  });
}

const httpUpload = (url, content = {}) => {
  return fetch(`${window.location.protocol}//${window.location.host}${url}`, {
    method: 'POST', // GET, *POST, PUT, DELETE, etc.
    credentials: 'include', // *include, same-origin, omit
    body: content
  });
}

export default {
  get: httpGet,
  post: httpPost,
  upload: httpUpload
};

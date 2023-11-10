// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


// GET REQUEST
function getTodos() {
  console.log('GET Request');
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      showOutput(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'New Task to do',
    completed: false
  })
    .then(res => {
      showOutput(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
  axios.put('https://jsonplaceholder.typicode.com/todos/2', {
    title: 'New Task to do',
    completed: true
  })
    .then(res => {
      showOutput(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
  axios.delete('https://jsonplaceholder.typicode.com/todos/2')
    .then(res => {
      showOutput(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ]).then(axios.spread((todos, posts) => showOutput(posts)))
    .catch(err => {
      console.log(err)
    })
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then(res => {
      showOutput(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
  const option = {
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'New works to do as soon as possible'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase()
      return data
    })
  }
  axios(option)
    .then(res => {
      showOutput(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
  axios.get('https://jsonplaceholder.typicode.com/todoss')
    .then(res => {
      showOutput(res)
    })
    .catch(err => {
      console.error(err)
    })
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
  const source = axios.CancelToken.source();
  console.log(source)

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });

  if (true) {
    source.cancel('Request canceled')
  }


}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

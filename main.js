// GET (default method)
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "POST testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "PUT testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// async/await
async function post(host, path, body, headers = {}) {
  const url = `https://${host}/${path}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
}

post("jsonplaceholder.typicode.com", "posts", {
  title: "Test",
  body: "async/await testing!",
  userId: 1,
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

export const baseAuthUrl = "https://api.movie.stacey.nomoredomains.icu";
// export const baseAuthUrl = "http://localhost:3001";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else return Promise.reject("Ошибка");
};

export const register = (name, email, password) => {
  console.log(JSON.stringify({ name, password, email }));
  return fetch(`${baseAuthUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password, email }),
  }).then(handleResponse);
};

export const login = (email, password) => {
  console.log(JSON.stringify({ password, email }));
  return fetch(`${baseAuthUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const getContent = (token) => {
  return fetch(`${baseAuthUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

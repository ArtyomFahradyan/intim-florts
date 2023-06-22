import { apiURL, token } from "../constants/common";
import { User } from "../types";

export async function getLocations(search: string) {
  const res = await fetch(
    `${apiURL}registration/locations?search=${search}&skip=0&limit=10&site_key=no01&amp;access_token=${token}`
  );

  return res.json();
}

export async function startRegistration(username: string) {
  const res = await fetch(`${apiURL}registration/start?site_key=no01`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });

  return res.json();
}

export async function endRegistration(user: Partial<User>, userId: string) {
  const newUser = { ...user };
  delete newUser.userId;
  delete newUser.username;
  const res = await fetch(`${apiURL}registration/${userId}?site_key=no01`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  return res.json();
}

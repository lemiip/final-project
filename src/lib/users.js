import users from "../data/users.json";

const registeredUsersStorageKey = "olive-young-registered-users";

export function getRegisteredUsers() {
  try {
    const saved = localStorage.getItem(registeredUsersStorageKey);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function getAllUsers() {
  return [...users, ...getRegisteredUsers()];
}

export function findUserById(id) {
  return getAllUsers().find((user) => user.id === id);
}

export function findUserForLogin(loginText, password) {
  const cleanLogin = loginText.trim().toLowerCase();

  return getAllUsers().find((user) =>
    (user.email.toLowerCase() === cleanLogin || user.id.toLowerCase() === cleanLogin) &&
    user.password === password
  );
}

export function userExists(id, email) {
  return getAllUsers().some((user) =>
    user.id.toLowerCase() === id.toLowerCase() ||
    user.email.toLowerCase() === email.toLowerCase()
  );
}

export function saveRegisteredUser(user) {
  const nextUsers = [...getRegisteredUsers(), user];
  localStorage.setItem(registeredUsersStorageKey, JSON.stringify(nextUsers));
}

export function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

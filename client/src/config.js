export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getUserApi = {
  getAllUsers: () => `http://localhost:3030/users/getAllUsers`,
  getUserByUid: (uid) => `http://localhost:3030/users/getUserByUid/${uid}`,
  getUserByUserName: (username) =>
    `http://localhost:3030/users/getUserByUserName/${username}`,
  setSessionUser: (uid) => `http://localhost:3030/users/setUserSession/${uid}`,
};

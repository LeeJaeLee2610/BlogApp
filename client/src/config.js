export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getUserApi = {
  getAllUsers: () => `http://localhost:3030/users/getAllUsers`,
  getUserByUid: (uid) => `http://localhost:3030/users/getUserByUid/${uid}`,
  setSessionUser: (uid) => `http://localhost:3030/users/setUserSession/${uid}`,
  getSessionUser: () => `http://localhost:3030/users/getUserSession`,
};

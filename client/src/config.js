export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getApi = {
  getUserByUid: (uid) => `http://localhost:3030/users/getUserByUid/${uid}`,
  getInfoByUid: (uid) => ``
};

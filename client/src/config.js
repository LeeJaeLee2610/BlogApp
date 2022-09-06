export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getApi = {
  getAllUsers: () => `http://localhost:3030/users/getAllUsers`,
  getUserByUid: (uid) => `http://localhost:3030/users/getUserByUid/${uid}`,
  getUserByUserName: (username) =>
    `http://localhost:3030/users/getUserByUserName/${username}`,
  getInfoByUid: (uid) => `http://localhost:3030/info/getInfoByUid/${uid}`,
  get3InfoSA: () => `http://localhost:3030/info/get3infos`,
  get10InfoSA: () => `http://localhost:3030/info/get10infos`,
  get3InfoSA1: (uid) => `http://localhost:3030/info/get3infos1/${uid}`,
  get10InfoSA1: (uid) => `http://localhost:3030/info/get10infos1/${uid}`,
  get3InfoFL: (uid) => `http://localhost:3030/info/get3infoFL/${uid}`,
  get10InfoFL: (uid) => `http://localhost:3030/info/get10infoFL/${uid}`,
};

// export const user_tmp = document.querySelector(".user").getBoundingClientRect();

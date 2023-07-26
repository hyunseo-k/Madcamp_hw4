import axios from "axios";

export const userInfo = {
  id: 0,
  email: "test@gmail.com",
  password: "test",
  username: "test",
  nickname: "test",
  ranking: 0,
  score: 0,
};
export const userAPI = {
  getUserInfo: async (email, password) => {
    try {
      return axios.get(
        `http://172.10.5.48/user?email=${email}&password=${password}`
      );
    } catch (e) {
      console.log(e);
    }
  },
  updateUserInfo: (newInfo) => {
    // 업데이트하고
    // 상태 업데이트해주기
  },
  createUserInfo: () => {},
};

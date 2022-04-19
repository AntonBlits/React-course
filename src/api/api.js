import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   headers: {
      "API-KEY": "5400d653-6750-4332-9550-92553efe8c85"
   },
   baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 100) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
         .then(response => response.data)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
         .then(response => response.data)
   },
}
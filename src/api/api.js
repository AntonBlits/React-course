import *as axios from 'axios';

const instance = axios.create({
   withCredetials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      'API-KEY': 'd46ccef0-1611-4167-a06a-3b89053f0b0e',
   },
})

export const usersAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   }
}

export const followAPI = {
   follow(id) {
      return instance.post(`follow/${id}`, {})
         .then(response => response.data)
   },
   unfollow(id) {
      return instance.delete(`follow/${id}`)
         .then(response => response.data)

   },
}

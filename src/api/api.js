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

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId)
         .then((response) => response.data)
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId)
         .then((response) => response.data)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status })
         .then((response) => response.data)
   },
   updateMainPhoto(photoFile) {
      const formData = new FormData();
      formData.append("image", photoFile);

      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/formData'
         }
      })
         .then((response) => response.data)
   },
   updateProfile(profile) {
      return instance.put('profile', profile)
         .then((response) => response.data);
   },
}

export const authAPI = {
   me() {
      return instance.get('auth/me')
         .then(response => response.data)
   },
   login(email, password, rememberMe = false) {
      return instance.post('auth/login', { email, password, rememberMe })
         .then(response => response.data)
   },
   logout() {
      return instance.delete('auth/login')
         .then(response => response.data)
   }
}

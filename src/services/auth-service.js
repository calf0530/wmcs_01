import axios from 'axios'

const API_URL = 'http://15.164.220.234/users/'

class AuthService {
  login (user) {
    return axios
      .post('API_URL', {
        Id: user.Id,
        PW: user.PW
      })
      .then(this.handleResponse)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (user) {
    return axios.post(API_URL + 'signup', {
      Id: user.Id,
      PW: user.PW,
      nickname: user.nickname,
      phone: user.phone,
      email: user.email,
      role: user.role
    })
  }

  handleResponse (response) {
    if (response.status === 401) {
      this.logout()
      location.reload(true)

      const error = response.data && response.data.message
      return Promise.reject(error)
    }

    return Promise.resolve(response)
  }
}

export default new AuthService()

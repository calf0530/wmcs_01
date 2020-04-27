export default class User {
  constructor (Id, email, password, nickname, phone, role) {
    this.Id = Id
    this.PW = password
    this.email = email
    this.nickname = nickname
    this.phone = phone
    this.role = role
  }
}

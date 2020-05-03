class User{
  constructor(username, email){
    this.username = username,
    this.email = email,
    this.score = 0
  }
  login(){
    console.log(`${this.username} logged in`)
    return this
  }
  logout(){
    console.log(`${this.username} logged out`)
    return this
  }
  incScore(){
    this.score += 1
    console.log(`${this.username} has a score ${this.score}`)
    return this
  }
}

User.prototype.returnData = function(){
  console.log(`${this.username}, ${this.email}`)
  return this
}

class Admin extends User{
  constructor(username,email,title){
    super();
    this.title = title
  }
  deleteUser(user){
    users = users.filter((u) => {
      return u.username !== user.username
    })
  }
}

const userOne = new User('mario', 'mario@mario.mo')
const userTwo = new User('Kamil', 'mario@mario.mo')
const userThree = new Admin('Luigi', 'luigi2luigi.lu', 'hell lord')

console.log(userThree)
userThree.incScore();

let users = [userOne, userTwo, userThree]
console.log(users)

userThree.deleteUser(userTwo)

console.log(users)
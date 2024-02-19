const User = {
    _email: 'y@yd.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const yash = Object.create(User)
console.log(yash.email);
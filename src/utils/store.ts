import { makeAutoObservable } from "mobx";

class LastUser {
    userInfo = {
        email: '',
        photoLink: '',
        name: ''
    }
    constructor() {
        makeAutoObservable(this)
    }

    setUserInfo(email: string, photoLink: string, name: string) {
        this.userInfo = {
            email: email,
            photoLink: photoLink,
            name: name
        }
    }
}

export default new LastUser()
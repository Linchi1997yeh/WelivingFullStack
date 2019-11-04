let email = '';
let password = '';
const dataUrl = 'http://localhost:3000/data/';
const userUrl = 'http://localhost:3000/member/'
class manageGlobal {

    static changeEmail(newEmail){
        email = newEmail;
    }
    static changePassword (newPassword){
        password = newPassword;
    }
    static getEmail(){
        return email;
    }
    static getPassword(){
        return password;
    }
    static getDataUrl(){
        return dataUrl;
    }
    static getUserUrl(){
        return userUrl;
    }
    static clearUser(){
        email = '';
        password = '';
    }
}

export default manageGlobal
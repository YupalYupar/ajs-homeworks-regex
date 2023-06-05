export default class Validator {
    constructor(login) {
        this.login = login;
    }

    validateUsername() {
        const regex_1 = /^[a-z][\da-z_-]*[a-z]$/i.test(this.login);
        const regex_2 = !(/\d{4,}/.test(this.login));
        if (regex_1 && regex_2) {
            return true;
        }
        return false;
    }
}
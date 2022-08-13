export default class Storage {
    static setItem(key: string, user: string) {
        localStorage.setItem(key, user)
    }

    static getItem(key: string) {
        return localStorage.getItem(key)
    }

    static clearStorage() {
        localStorage.clear()
    }
}
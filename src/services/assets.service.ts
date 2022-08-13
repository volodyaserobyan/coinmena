export default class Assets {
    static async getAssets() {
        const response = await fetch('https://api.exchangerate.host/latest')
        return await response.json()
    }
}
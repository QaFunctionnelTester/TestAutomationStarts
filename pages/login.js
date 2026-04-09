exports.loginPage = class loginPage {
    constructor(page) {
        this.page = page

        this.username_testbox = page.getByRole('textbox', { name: 'Username' })
        this.password_testbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: ' Login' })

    }
    async gotologinPage() {
            await this.page.goto('https://the-internet.herokuapp.com/login');
        }
        // au lieu d'écrire chaque méthode (username, pass, login) toute seule on fait comme ça 
    async login(username, Password) {
        await this.username_testbox.fill(username)
        await this.password_testbox.fill(Password)
        await this.login_button.click()
    }
}
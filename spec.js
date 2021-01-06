//* Describe and It
    //? Syntax used from Jasmine
//* Browser
    //? Global created by Protractor -> used for browser-level commands like navigation w/ browser.get

describe('Enter name feature', () => {
    it('should enter name as Tom', () => {
        browser.get('https://angularjs.org/');
    })
})
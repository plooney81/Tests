//* Describe and It
    //? Syntax used from Jasmine
//* Browser
    //? Global created by Protractor -> used for browser-level commands like navigation w/ browser.get
    //? Browser.get is a method to launch the url we feed it.

const { element } = require("protractor");

describe('Enter name feature', () => {
    it('should enter name as Tom', () => {
        browser.get('https://angularjs.org/');

        element(by.model('yourName')).sendKeys('Tom');//finds the element with the model name of 'yourName' and types in 'Tom'
        let helloText = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1')); //finds the element with the following xpath --> inspect, right click on element you want to copy, then go to copy and then copy x-path
        expect(helloText.getText()).toEqual('Hello Tom!'); //is saying-> we are expecting this element's text to equal 'Hello Tom!' now
    });
});
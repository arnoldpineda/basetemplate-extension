import Background from "../../src/classes/Background";
import BrowserEvents from "../../src/helpers/BrowserEvents";

const chrome = require('sinon-chrome');

var back = new Background(new BrowserEvents(chrome));

describe('Background', () => {
    it('should open new window', function(){
        expect(chrome.tabs.create.notCalled).toBeTruthy();
        back.openWindow({
            "url": null,
            "query": null
        });
        expect(chrome.tabs.create.calledOnce).toBeTruthy();
    })
});
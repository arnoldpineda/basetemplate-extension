import Popup from "../../src/classes/Popup";

const chrome = require('sinon-chrome');

describe('Popup', function () {
    let chromeMock = Object.assign({}, chrome);

    beforeAll(() => {
        document.body.innerHTML = '<button id="btn">Btn</button>';
    })

    test('Should create popup instance', function () {
        new Popup(chromeMock);
        document.querySelector("#btn").click();

        expect(chrome.runtime.sendMessage.called).toBeTruthy();
    })
})
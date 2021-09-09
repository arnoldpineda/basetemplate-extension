import FrontEnd from "../../src/classes/FrontEnd";

const chrome = require('sinon-chrome');

describe('FrontEnd', function () {
    let chromeMock = Object.assign({}, chrome);

    beforeAll(() => {
        document.body.innerHTML = '<input type="text" class="gLFyf gsfi"><input type="text"><input type="text"><input type="text"><input type="text"><input type="submit">';
    })

    test('should click in inputs', function () {
        var front = new FrontEnd(chromeMock);
        let inputSearch = document.querySelector("input.gLFyf.gsfi");
        let btnSubmit = document.querySelectorAll("input")[5];
        front.searchGoogle({
            "url": null,
            "query": null
        });
        var clicked = false;

        inputSearch.addEventListener('click', () => {
            inputSearch.addEventListener('click', () => {
                clicked = true;
            })
        })
        setTimeout(() => {
            expect(clicked).toBeTruthy();
        }, 3000)
    })
})
import BrowserEvents from "../helpers/BrowserEvents";

export default class Popup {
    constructor( driver ){
        this.BrowserEvents = new BrowserEvents(driver);

        //Events
        document.querySelector("#btn").addEventListener('click', () => {
            this.BrowserEvents.sendMessage({
                "task" : "openWindow",
                "class" : "Background",
                "data" : {
                    "url": "https://google.com",
                    "query": "javascript"
                }
            })
        });
    }
}
import BrowserEvents from "../helpers/BrowserEvents";

export default class Frontend {
    constructor( driver ) {
        this.className = 'frontEnd';
        this.driver = driver;
        this.browserEvents = new BrowserEvents(driver);
        this.browserEvents.onMessageUpdated(this);
    }

    getBrowserEvents(){
        return this.browserEvents;
    }

    getDriver(){
        return this.driver;
    }

    searchGoogle(data){
        let inputSearch = document.querySelector("input.gLFyf.gsfi");
        let btnSubmit = document.querySelectorAll("input")[5];
        inputSearch.click();
        inputSearch.value = data.query;
        setTimeout(()=>{
            btnSubmit.click();
        },1000)
    }
}
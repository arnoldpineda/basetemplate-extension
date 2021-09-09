// Imports
import Config from "../config/Config";

export default class Background {
    constructor( driver ) {
        this.className = 'background';
        this.message = {};
        this.browserEvents = driver;
        this.browserEvents.onMessageUpdated(this);
        this.browserEvents.onTabUpdated(this);
    }

    openWindow(data){
        this.message = {};
        this.browserEvents.createTab(data.url, (tab)=> {
            this.browserEvents.sendMessage({
                "tabId" : tab.id,
                "task" : "searchGoogle",
                "data" : data
            })
        })
    }
}
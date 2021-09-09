import Config from "../config/Config";

export default class BrowserEvents {
    constructor( driver ){
        this.driver = driver;
    }

    getDriver(){
        return this.driver;
    }

    onTabUpdated(instance) {
        this.driver.tabs.onUpdated.addListener((tabId, info) => this.handleTabEvent(tabId, info, instance));
    }

    handleTabEvent(tabId, info, instance) {
        if (instance.message && instance.message.tabId === tabId && info.status === "complete") {
            this.driver.tabs.sendMessage(tabId, instance.message);
        }
    }

    onMessageUpdated(instance) {
        this.driver.runtime.onMessage.addListener((message) => this.handleMessageEvent(message, instance));
    }

    handleMessageEvent(message, instance){
        let instanceMatch = true;
        if( instance && instance.className && message && message.class)
            instanceMatch = instance.className.toLowerCase() === message.class.toLowerCase();

        if (instance && instanceMatch && typeof instance[message.task] === 'function' )
            instance[message.task](message.data);

    }

    createTab(url, callback, waitUntilLoad = true) {
        this.driver.tabs.create({
            url: url
        }, (tab) => {
            if( waitUntilLoad )
                this.waitUntilPageLoad(tab.id, ()=> callback(tab) );
            else
                callback(tab)
        });
    }

    waitUntilPageLoad(tabId, callback){
        this.getTab(tabId, (tabInfo) => {
            if( tabInfo && tabInfo.status === 'complete' )
                callback();
            else
                setTimeout(()=>this.waitUntilPageLoad(tabId, callback), 1000);
        });
    }

    getTab( tabId, callback){
        this.driver.tabs.get(tabId, callback);
    }

    sendMessage(data, callback){
        if( data.tabId ){
            this.driver.tabs.sendMessage(data.tabId, data);
        }
        else
            this.driver.runtime.sendMessage(data, callback);
    }
}
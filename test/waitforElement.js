const homePage=require("../pages/homepage")
const { expect, assert } = require("chai")
const { draggable, Draggable, Droppable, getStartedButton } = require("../pages/homepage")

describe("Home Page Element",function(){
    this.retries(2)
    it("wait for elements to sync",function(){
        
    browser.url(`${browser.options.baseUrl}`)
    browser.pause(5000)
    
    homePage.customersLink.click()
    const getStartedButton=$("//a[text()=' Get Started1']")
    browser.waitUntil(function(){
        return getStartedButton.isDisplayed()===true 
    }),6000, "Email is not displayed"
})
})

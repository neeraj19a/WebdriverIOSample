const homePage=require("../pages/homepage")
const { expect, assert } = require("chai")
const { draggable, Draggable, Droppable, getStartedButton } = require("../pages/homepage")

const loginData=require("../testdata/logindata")

describe("Home Page Element",function(){
    
    // it("verify home page elements",function(){
    //     browser.url("https://www.freshworks.com/")
    //     const text=homePage.PageHeader.getText();
    //     console.log("text is -->"+text);
    //     const subHeaderText=homePage.subHeading.getText();
    //     console.log("subHeading is-->"+subHeaderText);
    //     homePage.getStarted.click();
    //     browser.pause(5000)
    //     homePage.supportLink.click();
    //     browser.pause(5000)
        
    // })

    // it("Print all List Elements",function(){
    //     browser.url(`${browser.options.baseUrl}`)
    //     homePage.childElements
    //     //homePage.specificElement(2).click();
    //     browser.pause(5000)
    //     homePage.specifChildElement(1).click();
    //     browser.pause(5000)
    //     console.log("Text here-->"+homePage.getChildElementText(1))

        
        
    // })

    // it("Some More Practice",function(){
    //     console.log("here Displayed-->"+homePage.contactUs.isDisplayed())
    //     console.log("here Enabled-->"+homePage.contactUs.isEnabled())
    //     console.log("here Existing-->"+homePage.contactUs.isExisting())
    //     console.log("here ViewPort-->"+homePage.contactUs.isDisplayedInViewport())
    //     homePage.clickonContactUs();
    //     browser.pause(2000)
    //     //chai asserstion
    //     expect(browser.getUrl()).equals("https://www.freshworks.com/contact/","Looks like URL is incorrect");

    //     browser.pause(5000)

    // })

    // it("Move To Element",function(){
    //     browser.url(`${browser.options.baseUrl}`)
    //     browser.pause(2000)
    //     homePage.moveToElement(homePage.supportLink)
    //     browser.pause(2000)
    //     homePage.helpAndSupportLink.click()
    //     browser.pause(2000)
    // })

    it("Enter Text and Tab KEY Event",function(){
        browser.url(`${browser.options.baseUrl}`)
        
        browser.pause(2000)
        homePage.clickonContactUs();
        browser.maximizeWindow()
        browser.pause(2000)
        homePage.enterTextinElement(homePage.firstName,loginData.username)
        browser.keys("Tab")
        browser.keys("Tab")
        browser.pause(5000)
    })

//   it("Scroll",function(){
//         browser.url(`${browser.options.baseUrl}`)
//         browser.pause(2000)
//         homePage.contactUs.scrollIntoView()
//         browser.pause(2000)
            
//     })

    // it("Scroll",function(){
    //     browser.url(`${browser.options.baseUrl}/contact`)
    //     browser.pause(2000)
    //     homePage.queryType.selectByVisibleText("Support")
    //     browser.pause(2000)
    //     homePage.queryType.selectByIndex("1")
    //     browser.pause(2000)
    //     homePage.queryType.selectByIndex("2")
        
    //     let listQuery=homePage.queryTypeList
    //     console.log("List size-->"+listQuery.length)
    //     for (let index = 0; index < listQuery.length; index++) {
    //         console.log("List value-->"+listQuery[index].getText())

    //         if(listQuery[index].getText()=="Sales"){
    //             listQuery[index].click()
    //             break;
    //         }
           
    //     }
    //     browser.pause(2000)
       
          
    // })

    
    // it("Add or Remove Elements",function(){
    //     browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
    //     homePage.addElement.click()
    //     homePage.deleteElement.waitForExist(5000)
    //     assert.equal(true,homePage.deleteElement.isExisting(),"Not Existing")

    // })

  
            
    
    
    
})
const { default: element } = require("webdriverio/build/commands/element")

class HomePage{

    get PageHeader(){
            return $('h1')
    }

    get subHeading(){
        return $('div.banner-text-content >p.sub-text')
    }

    get supportLink(){
        return $("//span[text()='Support']")
    }

    get helpAndSupportLink(){
        return $("//a[@class='nav-sub-label']/span[normalize-space()='Help & Support']")
    }
    get getStarted(){
        return $(".in-page-scroll")
    }

    get parent(){
        return $$('.nav-label')
    }

    get childElements(){
        return this.parent.filter(element=>{
            console.log("Here are lables-->"+element.getText())
        })
    }

    //function with index parameter to fetch a particular element, note this is notGetter Function as we are using index parameter
    //so we won't write get in front of it
    specifChildElement(index) {
        return $(`.nav-label:nth-child(${index})`)
    }

    getChildElementText(index){
        return this.specifChildElement(index).getText()
    }

    get contactUs(){
        return $("//a[text()='Contact us']")
    }

    clickonContactUs(){
        if(this.contactUs.isDisplayed()===true){
            this.contactUs.click()
        }
    }

    moveToElement(element){
        element.moveTo();
    }

    enterTextinElement(element,text){
        element.setValue(text)
    }
   

    get firstName(){
        return $(".first-name-form")
    }

    get queryType(){
        return $(".field-dropdown>select")
    }

    get queryTypeList(){
        return $$(".field-dropdown>select>option")
    }

    get addElement(){
        return $(".example>button")
    }

    get deleteElement(){
        return $("#elements>.added-manually")
    }
   
    get customersLink(){
        return $("(//a[text()='Customers'])[1]")
    }

   
    
 
}

module.exports=new HomePage();
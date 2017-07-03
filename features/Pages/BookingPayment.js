
var BookingPayment = function() {

    var loginBtn = element(by.cssContainingText('login'));
    var emailAddressInput = element(by.name('emailAddress', email));
    var passwordInput = element(by.name('password', password));
    var continueBtn = element(by.cssContainingText('.modal-form-group>button>span>span'));

    var fName = element(by.id("firstName"));
    var lName = element(by.id("lastName"));

    var phoneNumberCountry = element(by.name("phoneNumberCountry"));
    var phoneNum = element(by.name("phoneNumber")); 
    var cardNo = element(by.name("cardNumber")); 
 
    var code = element(by.name("securityCode")); 
    var holderName = element(by.name("cardHolderName")); 
    var address = element(by.id("billingAddressAddressLine1")); 
    var city = element(by.id("billingAddressCity")); 
    var postcode = element(by.id("billingAddressPostcode")); 

    var term = element(by.css("input[id*='acceptTerms']"));

    // Login 
    this.clickLoginBtn = function () {       
        return loginBtn.click();
    };

    this.setEmailAddress = function (email) {
        return emailAddressInput.click();
    };

    this.setPassword = function (password) {
        return passwordInput.click();
    };

    this.clickContinueBtn = function () {
        return continueBtn.click();        
    };


    //Passenger details
    this.setTitle = function (title) {
        var titl = element(by.id("title"))
            .then(function(options){
                options[title].click();
            });
        return titl.selectByVisibleText(title);
    };

    this.setFirstName = function (firstName) {
        return fName.sendKeys(firstName);
    };

    this.setLastName = function (lastName) {
        return lName.sendKeys(lastName);
    };


    //Payment and contact details
    this.setPhoneNumberCountry = function (country) {
        return phoneNumberCountry.sendKeys(country);
    };

    this.setPhoneNumber = function (phoneNumber) {
        return phoneNum.sendKeys(phoneNumber);
    };

      
    //Payment method
    this.setCardNumber = function (cardNumber) {
        return cardNo.sendKeys(phoneNumber);
    };

    this.setCardType = function (cardType) {
        var card = element(by.name("cardType"))
            .then(function(options){
            options[optionNum].click();
        });
        return card.sendKeys(cardType);
    };

    this.setExpiryMonth = function (expiryMonth) {
        var expiryMth= element(by.name("expiryMonth"))
            .then(function(options){
            options[expiryMonth].click();
        });
        return expiryMth.sendKeys(expiryMonth);
    };

    this.setExpiryYear = function (expiryYear) {
        var year = element(by.name("expiryYear")) 
            .then(function(options){
            options[expiryYear].click();
        });
        return year.sendKeys(expiryYear);
    };

    this.setSecurityCode = function (securityCode) {
        return code.sendKeys(securityCode);
    };

    this.setCardHolderName = function (cardHolderName) {
        return holderName.sendKeys(cardHolderName);
    };
         

    //Billing address
    this.setBillingAddress= function (billingAddress) {
        return address.sendKeys(phoneNumber);
    };

    this.setBillingAddressCity = function (billingAddressCity) {
        return city.sendKeys(billingAddressCity);
    };

    this.setBillingAddressPostcode = function (billingAddressPostcode) {
        return postcode.sendKeys(billingAddressPostcode);
    };

    this.setBillingAddressCountry = function (billingAddressCountry) {
        var country = element(by.id("billingAddressCountry"))
            .then(function(options){
            options[billingAddressCountry].click();
        });
        return country.sendKeys(billingAddressCountry);
    }; 

    this.acceptTerms = function(){          
        if (!term.isSelected()) {
            return term.click();
        }
    };

    
};
module.exports = BookingPayment;
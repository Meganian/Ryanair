var BookingHome = function() {
    var priceBtn1 = element(by.cssContainingText('#outbound.core-btn-primary span'));
    var priceBtn2 = element(by.cssContainingText('#outbound.flights-table-fares__fare.standard button'));
    var priceBtn3 = element(by.cssContainingText('#inbound.core-btn-primary span'));
    var priceBtn4 = element(by.cssContainingText('#inbound.flights-table-fares__fare.standard button'));
    var continueBtn = element(by.buttonText('Continue'));



    this.clickPriceBtn1 = function () {        
        return priceBtn1.click();
    };

    this.clickPriceBtn2 = function () {
        return priceBtn2.click();
    };

    this.clickPriceBtn3 = function () {
        return priceBtn3.click();
    };

    this.clickPriceBtn4 = function () {
        return priceBtn4.click();
    };

    this.clickContinueBtn = function () {
        return continueBtn.click();        
    };
   
};
module.exports = BookingHome;
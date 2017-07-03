var BookingExtras = function() {

	var checkoutBtn = element(by.buttonText('Check out'));
	var infoBtn = element(by.buttonText('Ok, thanks'));

	this.checkDepartureCityName = function () {
        return element(by.css('.starting-point')).value();
    };

    this.clickCheckoutBtn = function () {        
        checkoutBtn.click();        
    };

    this.clickInfoBtn = function () {       
        infoBtn.click();        
    };

};
module.exports = BookingExtras;
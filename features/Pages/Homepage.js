var Homepage = function() {

    var oneWayRadio = element(by.id('flight-search-type-option-one-way'));
    var departureAirport = element(by.id('label-airport-selector-from'));
    var destinationAirport = element(by.id('label-airport-selector-to'));
    var countryChosen = element(by.cssContainingText('.core-list-item-rounded', country));
    var airportChosen = element(by.cssContainingText('.core-list-item-rounded', airport));
    var destinationChosen = element(by.cssContainingText('.core-list-item.core-list-item-rounded', country));
    var day = element(by.name("dateInput0"));
    var month = element(by.name("dateInput1"));
    var year = element(by.name("dateInput2"));
    var elem = element(by.css('.core-btn-primary'));


    this.get = function () {
        browser.get('https://www.ryanair.com/ie/en/');
    };

    this.setOneWay = function () {
        return oneWayRadio.click();
    };

    this.clickDepartureAirport = function () {
        departureAirport.click();
    };

    this.clickDestinationAirport = function () {
        destinationAirport.click();
    };

    this.clickChosenCountry = function (country) {
        return countryChosen.click();
    };

    this.clickChosenAirport = function (airport) {
        return airportChosen.click();
    };

    this.clickDestinationCountry = function (country) {
        return destinationChosen.click();
    };

    this.setDay = function (ddd) {
        return day.sendKeys(ddd);
    };

    this.setMonth = function (mm) {
        return month.sendKeys(mm);
    };

    this.setYear = function (yyy) {
        return year.sendKeys(yyy);
    };

    this.clickLetsGo = function () {
        return elem.click();
    };

};
module.exports = Homepage;
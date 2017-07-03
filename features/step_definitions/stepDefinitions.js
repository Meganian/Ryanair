
var Homepage = require('../Pages/Homepage.js');
var homepage = new Homepage();

var BookingHome = require('../Pages/BookingHome.js');
var bookingHome = new BookingHome();

var BookingExtras = require('../Pages/BookingExtras.js');
var bookingExtras = new BookingExtras();

var BookingPayment = require('../Pages/BookingPayment.js');
var bookingPayment = new BookingPayment();


var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var city = bookingExtras.checkDepartureCityName();

module.exports = function() {

    //homepage

    this.Given(/^I go to "([^"]*)"$/, function(site) {
        browser.get(site);
        homepage.setOneWay();
    });

    this.When(/^I choose departure country "([^"]*)"$/, function(country) {
        
        homepage.clickDepartureAirport();
        homepage.clickChosenCountry(country);
    });

    this.When(/^I choose departure airport "([^"]*)"$/, function(airport) {
        homepage.clickChosenAirport(airport);
    });

    this.When(/^I choose destination country "([^"]*)"$/, function(country) {
        homepage.clickDestinationAirport();
        homepage.clickDestinationCountry(country);
    });

    this.When(/^I choose destination airport "([^"]*)"$/, function(airport) {
        homepage.clickChosenAirport(airport);
    });

    this.When(/^I choose departure day "([^"]*)"$/, function(ddd) {
        homepage.setDay(ddd);
    });

    this.When(/^I choose departure month "([^"]*)"$/, function(mm) {      
        homepage.setMonth(mm);
    });

    this.When(/^I choose departure year "([^"]*)"$/, function(yyy) {
        homepage.setYear(yyy);
    });

    this.Then(/^I can go to the next step$/, function() {
        homepage.clickLetsGo();
    });


    //bookingHome

    this.When(/^I choose price button$/, function() {
        bookingHome.clickPriceBtn1();
        bookingHome.clickPriceBtn2();
        bookingHome.clickPriceBtn3();
        bookingHome.clickPriceBtn4();
        bookingHome.clickContinueBtn();
    });


    //bookingExtras

    this.Then(/^I should see departure city name"([^"]*)"$/, function(cityName) {      
        expect(city.to.equal(cityName));
    });

    this.When(/^I can go to the next step$/, function() {
        bookingExtras.clickCheckoutBtn();
        bookingExtras.clickInfoBtn();
    });


    //bookingPayment

    this.When(/^I login"([^"]*)"$/, function(email, password) {
        bookingPayment.clickLoginBtn();
        bookingPayment.setEmailAddress(email);
        bookingPayment.setPassword(password);
        bookingPayment.clickContinueBtn();      
    });

    this.When(/^I set passanger details"([^"]*)"$/, function(title, firstName, lastName) {
        bookingPayment.setTitle(title);
        bookingPayment.setFirstName(firstName);
        bookingPayment.setLastName(lastName);
    });

    this.When(/^I set payment and contact details"([^"]*)"$/, function(country, phoneNumber) {
        bookingPayment.setPhoneNumberCountry(country);
        bookingPayment.setPhoneNumber(phoneNumber);
    });

    this.When(/^I set payment method"([^"]*)"$/, function(cardNumber, cardType, expiryMonth, expiryYear, securityCode, cardHolderName) {
        bookingPayment.setCardNumber(cardNumber);
        bookingPayment.setCardType(cardType);
        bookingPayment.setExpiryMonth(expiryMonth);
        bookingPayment.setExpiryYear(expiryYear);
        bookingPayment.setSecurityCode(securityCode);
        bookingPayment.setCardHolderName(cardHolderName);
    });

    this.When(/^When I set billing address"([^"]*)"$/, function(billingAddress, billingAddressCity, billingAddressPostcode, billingAddressCountry) {
        bookingPayment.setBillingAddress(billingAddress);
        bookingPayment.setBillingAddressCity(billingAddressCity);
        bookingPayment.setBillingAddressPostcode(billingAddressPostcode);
        bookingPayment.setBillingAddressCountry(billingAddressCountry);
    }); 

    this.When(/^I acceptTerms$/, function() {
        bookingPayment.acceptTerms();
    });
};


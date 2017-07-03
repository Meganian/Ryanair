
Feature: Running Cucumber with Protractor

  Scenario: Choosing a departure and destination place
    Given I go to "https://www.ryanair.com/ie/en/"
    When I choose departure country "Greece"
    When I choose departure airport "Chania"
    When I choose destination country "Ireland"
    When I choose destination airport "Dublin"
    When I choose departure day "08"
    When I choose departure month "07"
    When I choose departure year "2017"
    Then I can go to the next step

    Then I should see departure city name "Chania"
    
  	When I login "m.goorna@gmail.com","Qwerty1!"
  	When I set passanger details "2", "Anna", "Kowalska"
	  When I set payment and contact details "Polska", "123456789"
  	When I set payment method 55555555,"3","9","3",123,"Bob"
  	When I set billing address "Ruska", "Wroclaw", "54-432", "10"

  



Feature: New Client Registration - Success

  Scenario : I can register a new client by filling the mandatory info

    Given I am on the login page
    When I fill the new client registration form
    Then I should see a registration complete successfully message

Feature: Sample App test

    Scenario: Authentication testing
        Given I am on the main page
        When I select Sample App page
        And I enter username and password
        And I click on login button
        Then I should see welcome message
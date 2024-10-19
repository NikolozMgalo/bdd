Feature: Text input test
        input text into field
        button has same name

    Scenario: Text Input test
        Given I am on the homepage
        When I select text input
        And I write text in the input field
        And I click on the button
        Then Button name should change
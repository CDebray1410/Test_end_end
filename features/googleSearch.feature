Feature: Search in google

    Scenario: User search in navigation bar
        Given I am on the youtube page
        When I search with uplift spice
        Then I should see a result page containing youtube links about uplift spice
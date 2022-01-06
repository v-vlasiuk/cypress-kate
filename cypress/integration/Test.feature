Feature: Test
#TC General functionality #1.1.01
    Scenario: See the Plan runs page 
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        Then I see the Plan runs page
        Then Plan runs page button highlighted
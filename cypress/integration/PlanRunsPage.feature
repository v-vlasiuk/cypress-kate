Feature: Plan runs
#TC General functionality #1.1.01
    Scenario: See the Plan runs page 
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        Then I see the Plan runs page
        Then Plan runs page button highlighted

#TC General functionality #1.1.02
    Scenario: See the Plan runs list 
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        Then I see the Plan runs list

#TC General functionality #1.1.03
    Scenario: Change Plan runs list rows numbers
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I changed number of rows to 60
        Then I see 60 rows

#TC General functionality #1.1.04
    Scenario: Navigate through pagination
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I clicked on pagination right arrow to the last page
        Then I see disabled pagination right arrow
        When I clicked on pagination left arrow to the first page
        Then I see disabled pagination left arrow

#TC Search functionality #1.2.01
    Scenario: Search by valid runId
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "730" into runId search field
        Then I see 1 rows
        Then runs table item contains "730" as a runId

#TC Search functionality #1.2.02
    Scenario: Search by invalid runId
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "lll" into runId search field
        Then I see no dava available in runs table


#TC Search functionality #1.2.03
    Scenario: Search by valid Plan
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "Run of //sim/sim_tests/test_suites/highway:C14930_hwy_hero_merge_yield_bike (b4bc957c-3383-11ec-97f6-04d4c452b148)" into Plan search field
        Then I see 1 rows
        Then runs table item contains "Run of //sim/sim_tests/test_suites/highway:C14930_hwy_hero" as a Plan

#TC Search functionality #1.2.04
    Scenario: Search by invalid Plan
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "ooooooooo" into Plan search field
        Then I see no dava available in runs table

#TC Search functionality #1.2.05
    Scenario: Search by valid Branch
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "users/x-wdong/MRVL-2052-writing-data-directly-to-metric-runs" into Branch search field
        Then I see 17 rows
        Then runs table item contains "users/x-wdong/MRVL-2052-wr" as a Branch

#TC Search functionality #1.2.06
    Scenario: Search by invalid Branch
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "ooooooooo" into Branch search field
        Then I see no dava available in runs table

#TC Search functionality #1.2.07
    Scenario: Search by valid Commit
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "24c6d6332b032fa56aa550aaee1a76f41318743f" into Commit search field
        Then I see 2 rows
        Then runs table item contains "24c6d63" as a Commit

#TC Search functionality #1.2.08
    Scenario: Search by invalid Commit
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "ooooooooo" into Commit search field
        Then I see no dava available in runs table

#TC Search functionality #1.2.09
    Scenario: Search by valid Username
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I changed number of rows to 200
        When I entered "vpassichenko" into Username search field
        Then I see 90 rows
        Then runs table item contains "vpassichenko" as a Username

#TC Search functionality #1.2.10
    Scenario: Search by invalid Username
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "00000" into Username search field
        Then I see no dava available in runs table

#TC Search functionality #1.2.11
    Scenario: Search by valid Jobs
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "8d6e37ce-9244-41a7-b3f7-44085b578643" into Jobs search field
        Then I see 1 rows
        When I clicked on jobDetails icon
        Then runs table item contains "8d6e37ce-9244-41a7-b3f7-44085b578643" as a Jobs

#TC Search functionality #1.2.12
    Scenario: Search by invalid Jobs
        Given I navigate to the Plan runs page
        When the Plan runs page has loaded
        When I entered "oooooo" into Jobs search field
        Then I see no dava available in runs table


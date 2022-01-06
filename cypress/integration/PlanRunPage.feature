Feature:Plan run
    #TC General functionality #3.1.01
    Scenario: See Plan run details page 
        Given I navigate to the Plan run no "1184" page
        When Plan run page is loaded
        Then Plandetails link is clickable


    #TC General functionality #3.1.02
    Scenario: See test suite title on Plun run Page
        Given I navigate to the Plan run no "1184" page
        When Plan run page is loaded
        Then test suite title "Run of //sim/sim_tests/test_suites/highway:C14930_hwy_hero_merge_yield_bike" is visible

    # #TC General functionality #3.1.03 -tbd
    # Scenario: Triage Create From Existing button
    #     Given I navigate to the Plan run no "1184" Page
    #     When Plan run page is loaded
    #     When I clicked ""Create From Existing"" button
    #     Then I see new page <tbd>"

    #TC General functionality #3.1.04-tbd
    # Scenario: Triage New Run button
    #     Given I navigate to the Plan run no "1184" Page
    #     When Plan run page is loaded
    #     When I clicked "New Run" button
    #     Then I see new page <tbd>

    # #TC General functionality #3.1.05-tbd
    # Scenario: Triage Compare To Dropdown
    #     Given I navigate to the Plan run no "1184" Page
    #     When Plan run page is loaded
    #     When I clicked the "compare with" dropdown
    #     Then I see at least 1 option in the dropdown

    #TC General functionality #3.1.06
    Scenario: Triage Suite Dropdown
        Given I navigate to the Plan run no "1184" page
        When Plan run page is loaded
        When I clicked the Suite dropdown
        Then I see 1 option in the dropdown
    

    # #TC General functionality #3.1.07-tbd
    # Scenario: Triage Suite -> Compare To Dropdown
    #     Given I navigate to the Plan run no "1184" Page
    #     When Plan run page is loaded
    #     When I scroll to the bottom of the page
    #     When I clicked the "compare with" dropdown
    #     Then I see at least 1 option in the dropdown

    #TC General functionality #3.1.08
    Scenario: Triage Suite -> Bulk Edit Button
        Given I navigate to the Plan run no "1184" page
        When Plan run page is loaded
        Then I see Bulk Edit button is disabled
        When I select first test run
        When I click the Bulk Edit button
        Then I see Bulk Edit window

    #TC General functionality #3.1.09
    Scenario: Triage Suite -> Test Count
        Given I navigate to the Plan run no "1389" page
        When Plan run page is loaded
        Then I see 10 tests runs
        Then I see the text "97.11% passed (5476)" on the page


    #TC General functionality #3.1.10
    Scenario: Triage Suite -> Code Branch information
        Given I navigate to the Plan run no "1389" page
        When Plan run page is loaded
        Then I see "Code Branch" text is present
        Then I see "user/habdi/MRVL-2133-rerun_scenarios_on_run-trg-pgs" as a Code Branch information

    #TC General functionality #3.1.11
    Scenario: Triage Suite -> Commit Hash information
        Given I navigate to the Plan run no "1389" page
        When Plan run page is loaded
        Then I see "Commit Hash" text is present
        Then I see "a2427ef922241c6867d045231c20abcdcef5cda9" as a Commit Hash information

    #TC General functionality #3.1.12
    Scenario: Triage Suite -> Created At information
        Given I navigate to the Plan run no "1389" page
        When Plan run page is loaded
        Then I see "Created At" text is present
        Then I see "Tue Nov 02 2021 23:54:05 GMT-0700 (Pacific Daylight Time)" as a Created At information

    #TC General functionality #3.1.13
    Scenario: Triage Suite -> State information
        Given I navigate to the Plan run no "1389" page
        When Plan run page is loaded
        Then I see "State" text is present
        Then I see "Finished" as a State information

    #TC General functionality #3.1.14
    Scenario: Triage Suite -> Extractors information
        Given I navigate to the Plan run no "1389" page
        When Plan run page is loaded
        Then I see "Extractors" text is present
        Then I see "//sim/marvel/eval/extractors:get_run_metadata-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" as an Extractors information
        Then I see "//sim/marvel/eval/extractors:get_run_metric_results-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" as an Extractors information
        Then I see "//sim/marvel/eval/extractors:get_collision_metrics-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" as an Extractors information

    #TC Redirect #3.3.01
    Scenario: Triage -> fast triage button
        Given I navigate to the Plan run no "1184" page
        When Plan run page is loaded
        When I clicked the Fast Triage button
        Then Fast Triage "/fast_triage?runUuid=e600dc5e-d913-4a32-af1f-a5d76756bad7" page is open

    #TC Redirect #3.3.02
    Scenario: Triage Suite -> Visit test run page
        Given I navigate to the Plan run no "1184" page
        When Plan run page is loaded
        When I clicked on results on first test item
        Then Scenario run "/scenario/54368/run?suiteRunUuid=e600dc5e-d913-4a32-af1f-a5d76756bad7" page is open

    #TC Filters functionality #3.4.01
    Scenario: Triage Suite -> Filter By an existing result
        Given I navigate to the Plan run no "1184" page
        When Plan run page is loaded
        When I click the filter by button
        When filter menu is showing up
        When click the result dropdown
        When I click Success option
        When I click Filter button
        Then I see 2 tests runs
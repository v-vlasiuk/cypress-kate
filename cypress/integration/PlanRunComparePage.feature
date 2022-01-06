Feature:Plan Run Compare
    #TC General functionality #6.1.01
    Scenario: Compare Triage Suite -> Validate Plan Run Compare
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see "Plan run" text is present in header for candidate results
        Then I see "Plan run" text is present in header for control results
        Then I see "#1389" in header as a candidate Plan run information
        Then I see "#1392" in header as a control Plan run information

    #TC General functionality #6.1.02
    Scenario: Compare Triage Suite -> See test suite candidate and control titles
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then Candidate title "Run of //sim/sim_tests:golden (3ecf9aa0-3c6e-11ec-81c7-005056a15b76)" is visible
        Then Control title "Run of //sim/sim_tests:golden (3ecf9aa0-3c6e-11ec-81c7-005056a15b76)" is visible

    #TC General functionality #6.1.03
    Scenario: Compare Triage Suite -> Test Count for candidate and control 
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see 10 tests runs
        Then I see the text "97.11% passed (5476)" in the candidate results
        Then I see the text "0.23% warning (13)" in the candidate results
        Then I see the text "2.66% failed (150)" in the candidate results
        Then I see the text "96.74% passed (5455)" in the control results
        Then I see the text "0.21% warning (12)" in the control results
        Then I see the text "3.05% failed (172)" in the control results

    #TC General functionality #6.1.04
    Scenario: Compare Triage Suite -> Code Branch information in header for candidate and control 
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see "Code Branch" text is present in header for candidate results
        Then I see "Code Branch" text is present in header for control results
        Then I see "user/habdi/MRVL-2133-rerun_scenarios_on_run-trg-pgs" in header as a candidate Code Branch information
        Then I see "vehicle-merge-queue-batch-20211101-2140" in header as a control Code Branch information

    #TC General functionality #6.1.05
    Scenario: Compare Triage Suite -> Commit Hash information in header for candidate and control 
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see "Commit Hash" text is present in header for candidate results
        Then I see "Commit Hash" text is present in header for control results
        Then I see "a2427ef922241c6867d045231c20abcdcef5cda9" in header as a candidate Commit Hash information
        Then I see "bb38fe0803028e40cc8dd265dae23532c5e0cb86" in header as a control Commit Hash information

    #TC General functionality #6.1.06
    Scenario: Compare Triage Suite -> Created At information in header for candidate and control 
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see "Created At" text is present in header for candidate results
        Then I see "Created At" text is present in header for control results
        Then I see "Tue Nov 02 2021 23:54:05 GMT-0700 (Pacific Daylight Time)" in header as a candidate Created At information
        Then I see "Wed Nov 03 2021 01:57:59 GMT-0700 (Pacific Daylight Time)" in header as a control Created At information
    
    #TC General functionality #6.1.07
    Scenario: Compare Triage Suite -> State information in header for candidate and control
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see "State" text is present in header for candidate results
        Then I see "State" text is present in header for control results
        Then I see "Finished" in header as a candidate State information
        Then I see "Finished" in header as a control State information

    #TC General functionality #6.1.08
    Scenario: Compare Triage Suite -> Extractors information in header for candidate and control
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see "Extractors" text is present in header for candidate results
        Then I see "Extractors" text is present in header for control results
        Then I see "//sim/marvel/eval/extractors:get_run_metadata-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" in header as a candidate Extractors information
        Then I see "//sim/marvel/eval/extractors:get_run_metric_results-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" in header as a candidate Extractors information
        Then I see "//sim/marvel/eval/extractors:get_collision_metrics-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" in header as a candidate Extractors information
        Then I see "//sim/marvel/eval/extractors:get_run_metadata-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" in header as a control Extractors information
        Then I see "//sim/marvel/eval/extractors:get_run_metric_results-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" in header as a control Extractors information
        Then I see "//sim/marvel/eval/extractors:get_collision_metrics-40c07f1aae16038bdbdd88cf490b59f5f4a7dc9f" in header as a control Extractors information

    #TC General functionality #6.1.09
    Scenario: Compare Triage Suite -> number of test items
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        Then I see 5639 as a number of items

    #TC General functionality #6.1.10
    Scenario: Compare Triage Suite -> Validate Control Triage Suite Dropdown
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I clicked the Control Suite dropdown
        Then I see 1 option in the dropdown

     #TC General functionality #6.1.11
    Scenario: Compare Triage Suite -> Validate Candidate Triage Suite Dropdown
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I clicked the Candidate Suite dropdown
        Then I see 1 option in the dropdown

    #TC Redirect #6.3.01
    Scenario: Compare Triage Suite -> Validate Comparison of suite run hyperlink
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click comparison of suite-run- link
        Then Scenarios comparison "/suite/run/f7e6548c-8f18-46a4-8197-e5a617bd4816/compare/45bebe41-9ddc-4c25-a575-2bf0eb9d9f3d" page is open

    #TC Redirect #6.3.02
    Scenario: Compare Triage Suite -> Validate Candidate Fast Triage
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I clicked Candidate Fast Triage button
        Then Fast Triage Candidate "/fast_triage?runUuid=f7e6548c-8f18-46a4-8197-e5a617bd4816" page is open

    #TC Redirect #6.3.03
    Scenario: Compare Triage Suite -> Validate Control Fast Triage
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I clicked Control Fast Triage button
        Then Fast Triage Control "/fast_triage?runUuid=45bebe41-9ddc-4c25-a575-2bf0eb9d9f3d" page is open

    #TC Filters functionality #6.4.01
    Scenario: Compare Triage Suite -> Validate Showing Regressions items
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the showing dropdown
        When I click the "Regressions" option from the showing dropdown
        Then I see 7 as a number of items

    #TC Filters functionality #6.4.03
    Scenario: Compare Triage Suite -> Validate Showing Improvements items
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the showing dropdown
        When I click the "Improvements" option from the showing dropdown
        Then I see 28 as a number of items

    #TC Filters functionality #6.4.05
    Scenario: Compare Triage Suite -> Validate Showing Regressions results numbers from other pagination page
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click on right pagination arrow 4 times
        When I click the showing dropdown
        When I click the "Regressions" option from the showing dropdown
        Then I see 7 as a number of items
  
    #TC Filters functionality #6.4.06
    Scenario: Compare Triage Suite -> Validate Showing Improvements results numbers from other pagination page
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click on right pagination arrow 4 times
        When I click the showing dropdown
        When I click the "Improvement" option from the showing dropdown
        Then I see 28 as a number of items

    #TC Filters functionality #6.4.07
    Scenario:  Compare Triage Suite -> Validate candidate filter by results for "PASS"
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the candidate filter by button
        When filter menu is showing up
        When I click the "Result" dropdown
        When I click "PASSED" option in dropdown
        When I click Filter button
        Then I see "PASSED" in filtering candidate by field
        Then I see "Green" boxes for each row in the Candidate column.

    #TC Filters functionality #6.4.08
      Scenario:  Compare Triage Suite -> Validate candidate filter by results for "WARNING"
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the candidate filter by button
        When filter menu is showing up
        When I click the "Result" dropdown
        When I click "WARNING" option in dropdown
        When I click Filter button
        Then I see "WARNING" in filtering candidate by field
        Then I see "Orange" boxes for each row in the Candidate column.

    #TC Filters functionality #6.4.09
      Scenario:  Compare Triage Suite -> Validate candidate filter by results for "FAILED"
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the candidate filter by button
        When filter menu is showing up
        When I click the "Result" dropdown
        When I click "FAILED" option in dropdown
        When I click Filter button
        Then I see "FAILED" in filtering candidate by field
        Then I see "Red" boxes for each row in the Candidate column.

    #TC Filters functionality #6.4.10
    Scenario:  Compare Triage Suite -> Validate control filter by results for "PASS"
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I click the "Result" dropdown
        When I click "PASSED" option in dropdown
        When I click Filter button
        Then I see "PASSED" in filtering control by field
        Then I see "Green" boxes for each row in the Control column.

    #TC Filters functionality #6.4.11
    Scenario:  Compare Triage Suite -> Validate control filter by results for "WARNING"
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I click the "Result" dropdown
        When I click "WARNING" option in dropdown
        When I click Filter button
        Then I see "WARNING" in filtering control by field
        Then I see "Orange" boxes for each row in the Control column.

    #TC Filters functionality #6.4.12
    Scenario:  Compare Triage Suite -> Validate control filter by results for "FAILED"
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I click the "Result" dropdown
        When I click "FAILED" option in dropdown
        When I click Filter button
        Then I see "FAILED" in filtering control by field
        Then I see "Red" boxes for each row in the Control column.

    #TC Filters functionality #6.4.15
    Scenario:  Compare Triage Suite -> Validate candidate filter by valid scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the candidate filter by button
        When filter menu is showing up
        When I enter "56464,56259,56271,59043" into scenarioIds field
        When I click Filter button
        Then I see "56464,56259,56271,59043" in filtering candidate by field
        Then I see 4 tests runs


    #TC Filters functionality #6.4.16
    Scenario:  Compare Triage Suite -> Validate candidate filter by duplicated scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the candidate filter by button
        When filter menu is showing up
        When I enter "56464,56259,56271,59043,56464,56259,56271,59043" into scenarioIds field
        When I click Filter button
        Then I see "56464,56259,56271,59043,56464,56259,56271,59043" in filtering candidate by field
        Then I see 4 tests runs

    #TC Filters functionality #6.4.17
    Scenario:  Compare Triage Suite -> Validate candidate filter by invalid scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the candidate filter by button
        When filter menu is showing up
        When I enter "fgfg" into scenarioIds field
        When I click Filter button
        Then I see "fgfg" in filtering candidate by field
        Then I see popup with error notification message "Received a client error. Please ensure ids in URL are correct."

    # #TC Filters functionality #6.4.18
    Scenario:  Compare Triage Suite -> Validate control filter by valid scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I enter "56464,56259,56271,59043" into scenarioIds field
        When I click Filter button
        Then I see "56464,56259,56271,59043" in filtering control by field
        Then I see 4 tests runs

    #TC Filters functionality #6.4.19
    Scenario:  Compare Triage Suite -> Validate control filter by duplicated scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I enter "56464,56259,56271,59043,56464,56259,56271,59043" into scenarioIds field
        When I click Filter button
        Then I see "56464,56259,56271,59043,56464,56259,56271,59043" in filtering control by field
        Then I see 4 tests runs

    #TC Filters functionality #6.4.20
    Scenario:  Compare Triage Suite -> Validate control filter by invalid scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I enter "fgfg" into scenarioIds field
        When I click Filter button
        Then I see "fgfg" in filtering control by field
        Then I see popup with error notification message "Received a client error. Please ensure ids in URL are correct."

    #TC Filters functionality #6.4.21
    Scenario:  Compare Triage Suite -> Validate candidate and control filters intersection by valid scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I enter "56464,56259" into scenarioIds field
        When I click Filter button
        When I click the candidate filter by button
        When filter menu is showing up
        When I enter "56259,56271,59043" into scenarioIds field
        When I click Filter button
        Then I see "56464,56259" in filtering control by field
        Then I see "56259,56271,59043" in filtering candidate by field
        Then I see 1 tests runs

    #TC Filters functionality #6.4.22
    Scenario:  Compare Triage Suite -> Validate candidate and control filters intersection by valid scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I enter "56464,56259" into scenarioIds field
        When I click Filter button
        When I click the candidate filter by button
        When filter menu is showing up
        When I enter "59043" into scenarioIds field
        When I click Filter button
        Then I see "56464,56259" in filtering control by field
        Then I see "59043" in filtering candidate by field
        Then I see table warning notification message "No scenarios to show"

    #TC Filters functionality #6.4.23
    Scenario:  Compare Triage Suite -> Validate candidate and control filters intersection by valid scenarioIds
        Given I navigate to the Plan Comparison run "1389" to "1392" page
        When Plan Comparison page is loaded
        When I click the control filter by button
        When filter menu is showing up
        When I enter "56464,56259" into scenarioIds field
        When I click Filter button
        When I click the candidate filter by button
        When filter menu is showing up
        When I enter "fgfg" into scenarioIds field
        When I click Filter button
        Then I see "56464,56259" in filtering control by field
        Then I see "fgfg" in filtering candidate by field
        Then I see popup with error notification message "Received a client error. Please ensure ids in URL are correct."
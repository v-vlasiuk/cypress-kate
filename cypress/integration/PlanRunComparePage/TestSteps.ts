/// <reference types="cypress" /> 

import { PlanRunComparePageController } from "../PageController/PlanRunComparePageController";
const { Given, When, Then } = require( "cypress-cucumber-preprocessor/steps");

let planRunComparePageController: PlanRunComparePageController = new PlanRunComparePageController();

// Given
Given("I navigate to the Plan Comparison run {string} to {string} page",(s1:string,s2:string) =>{ 
    planRunComparePageController.openPlanRunComparePage(s1,s2);
} )

//When
When("Plan Comparison page is loaded", () =>{
    planRunComparePageController.planRunComparePageLoaded();
})

When("I click the showing dropdown", () =>{
    planRunComparePageController.clickPlanRunComparePageShowingDropdown();
})

When("I click the {string} option from the showing dropdown", (s:string) =>{
    planRunComparePageController.clickPlanRunComparePageShowingDropdownItem(s);
})

When("I clicked the Control Suite dropdown", () =>{
    planRunComparePageController.clickPlanRunComparePageControlSuiteDropdown();
})

When("I clicked the Candidate Suite dropdown", () =>{
    planRunComparePageController.clickPlanRunComparePageCandidateSuiteDropdown();
})

When("I click comparison of suite-run- link", () =>{
    planRunComparePageController.clickPlanRunComparePageSuiteCompareLink();
})

When("I clicked Candidate Fast Triage button", () =>{
    planRunComparePageController.clickPlanRunComparePageCandidateFastTriageButton();
})

When("I clicked Control Fast Triage button", () =>{
    planRunComparePageController.clickPlanRunComparePageControlFastTriageButton();
})


When("I click the candidate filter by button", () =>{
    planRunComparePageController.clickPlanPunCompareCandidateFilterByButton();
})

When("filter menu is showing up", () =>{
    planRunComparePageController.planRunCompareFilterMenuIsShowingUp();
})

When("I click the {string} dropdown", (s: string) =>{
    planRunComparePageController.clickPlanPunCompareFilterByDropdown(s);
})

When("I click {string} option in dropdown", (s: string) =>{
    planRunComparePageController.clickPlanPunCompareFilterByResultsPassDropdownOption(s);
})

When("I click Filter button", () =>{
    planRunComparePageController.clickPlanPunCompareFilterByResultsDropdownFilterButton();
})

When("I click the control filter by button", () =>{
    planRunComparePageController.clickPlanPunCompareControlFilterByButton();
})

When("I click on right pagination arrow {int} times", (n1:number) =>{
    planRunComparePageController.clickPlanRunCompareRightPaginationIcon(n1);
})

When("I enter {string} into scenarioIds field", (s:string) =>{
    planRunComparePageController.enterPlanRunCompareItemIntoScenarioIdsField(s);
})

//Then

Then ("Candidate title {string} is visible", (s:string) =>{
    planRunComparePageController.planRunCompareCandidateTitleIsVisible(s);
})

Then ("Control title {string} is visible", (s:string) =>{
    planRunComparePageController.planRunCompareControlTitleIsVisible(s);
})

Then ("I see {int} tests runs", (n1:number)=>{
    planRunComparePageController.planRunCompareTestsRunsListPresent(n1);
})

Then ("I see the text {string} in the candidate results", (s:string) =>{
    planRunComparePageController.planRunCompareTextIsPresentInCandidateResults(s);
})

Then ("I see the text {string} in the control results", (s:string) =>{
    planRunComparePageController.planRunCompareTextIsPresentInControlResults(s);
})

Then ("I see {string} in header as a candidate Plan run information", (s:string) =>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForCandidatePlanRun(s);
})

Then ("I see {string} in header as a control Plan run information", (s:string) =>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForControlPlanRun(s);
})

Then ("I see {string} text is present in header for candidate results", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForCandidate(s1);
})

Then ("I see {string} text is present in header for control results", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForControl(s1);
})

Then ("I see {string} in header as a candidate Code Branch information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForCandidateBranch(s1);
})

Then ("I see {string} in header as a control Code Branch information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForControlBranch(s1);
})

Then ("I see {string} in header as a candidate Commit Hash information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForCandidateCommitHash(s1);
})

Then ("I see {string} in header as a control Commit Hash information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForControlCommitHash(s1);
})

Then ("I see {string} in header as a candidate Created At information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForCandidateCreatedAt(s1);
})

Then ("I see {string} in header as a control Created At information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForControlCreatedAt(s1);
})

Then ("I see {string} in header as a candidate State information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForCandidateState(s1);
})

Then ("I see {string} in header as a control State information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForControlState(s1);
})

Then ("I see {string} in header as a candidate Extractors information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForCandidateExtractors(s1);
})

Then ("I see {string} in header as a control Extractors information", (s1:string)=>{
    planRunComparePageController.planRunCompareTextIsPresentInHeaderForControlExtractors(s1);
})

Then ("I see {int} as a number of items", (n1:number)=>{
    planRunComparePageController.planRunCompareRunsListItemsNumber(n1);
})

Then ("I see {int} option in the dropdown", (n1:number)=>{
    planRunComparePageController.planRunCompareSuiteItemsNumber(n1);
})

Then ("Scenarios comparison {string} page is open", (s1:string)=>{
    planRunComparePageController.planPunCompareScenarioComparisonIsOpen(s1);
})

Then ("Fast Triage Candidate {string} page is open", (s1:string)=>{
    planRunComparePageController.planPunCompareFastTriageCandidateIsOpen(s1);
})

Then ("Fast Triage Control {string} page is open", (s1:string)=>{
    planRunComparePageController.planPunCompareFastTriageControlIsOpen(s1);
})

Then ("I see {string} in filtering candidate by field", (s1:string)=>{
    planRunComparePageController.planPunCompareFilteringCandidateContains(s1);
})

Then ("I see {string} boxes for each row in the Candidate column.", (s1:string)=>{
    planRunComparePageController.planPunCompareCandidateResultsBoxesColorIs(s1);
})

Then ("I see {string} in filtering control by field", (s1:string)=>{
    planRunComparePageController.planPunCompareFilteringControlContains(s1);
})

Then ("I see {string} boxes for each row in the Control column.", (s1:string)=>{
    planRunComparePageController.planPunCompareControlResultsBoxesColorIs(s1);
})

Then ("I see popup with error notification message {string}", (s1:string)=>{
    planRunComparePageController.planPunCompareErrorMessagePopupContainsMessage(s1);
})

Then ("I see table warning notification message {string}", (s1:string)=>{
    planRunComparePageController.planPunCompareTableWarningMessageContainsMessage(s1);
})
/// <reference types="cypress" /> 


import { PlanRunPageController } from "../PageController/PlanRunPageController";
const { Given, When, Then } = require( "cypress-cucumber-preprocessor/steps");

let planRunPageController: PlanRunPageController = new PlanRunPageController();

// Given
Given("I navigate to the Plan run no {string} page",(s:string) =>{ 
    planRunPageController.openPlanRunPage(s);
} )

//When
When("Plan run page is loaded", () =>{
    planRunPageController.planRunPageLoaded();
})

When("I clicked the Suite dropdown", () =>{
    planRunPageController.clickPlanRunPageSuiteDropdown();
})

When("I select first test run", () =>{
    planRunPageController.selectPlanRunFirstTestListItem();
})

When("I click the Bulk Edit button", () =>{
    planRunPageController.clickPlanPunBulkEditButton();
})

When("I click the filter by button", () =>{
    planRunPageController.clickPlanPunFilterByIcon();
})

When("filter menu is showing up", () =>{
    planRunPageController.planRunFilterMenuIsShowingUp();
})

When("click the result dropdown", () =>{
    planRunPageController.clickPlanPunFilterByResultsDropdown();
})

When("I click Success option", () =>{
    planRunPageController.clickPlanPunFilterByResultsPassDropdownOption();
})

When("I click Filter button", () =>{
    planRunPageController.clickPlanPunFilterByResultsDropdownFilterButton();
})

When("I clicked the Fast Triage button", () =>{
    planRunPageController.clickPlanPunFastTriageButton();
})

When("I clicked on results on first test item", () =>{
    planRunPageController.clickPlanPunFirstItemResultsLink();
})

//Then
Then ("Plandetails link is clickable", () =>{
    planRunPageController.planRunPlanDetailsLinkIsClickable();
})

Then ("test suite title {string} is visible", (s1:string) =>{
    planRunPageController.planRunTestSuiteTitle(s1);
})

Then ("I see {int} option in the dropdown", (n1:number)=>{
    planRunPageController.planRunSuiteRunsListPresent(n1);
})

Then ("I see Bulk Edit button is disabled",() =>{
    planRunPageController.planRunButtonBulkEditIsDisabled();
})

Then ("I see Bulk Edit window",() =>{
    planRunPageController.planRunBulkUpdateWindowOpens();
})

Then ("I see {int} tests runs", (n1:number)=>{
    planRunPageController.planRunTestsRunsListPresent(n1);
})

Then ("I see the text {string} on the page", (s1:string)=>{
    planRunPageController.planRunTextIsPresentInSummary(s1);
})

Then ("I see {string} text is present", (s1:string)=>{
    planRunPageController.planRunTextIsPresent(s1);
})

Then ("I see {string} as a Code Branch information", (s1:string)=>{
    planRunPageController.planRunTextIsPresentInCodeBranch(s1);
})

Then ("I see {string} as a Commit Hash information", (s1:string)=>{
    planRunPageController.planRunTextIsPresentInCommitHash(s1);
})

Then ("I see {string} as a Created At information", (s1:string)=>{
    planRunPageController.planRunTextIsPresentInCreatedAt(s1);
})

Then ("I see {string} as a State information", (s1:string)=>{
    planRunPageController.planRunTextIsPresentInState(s1);
})

Then ("I see {string} as an Extractors information", (s1:string)=>{
    planRunPageController.planRunTextIsPresentInExtractors(s1);
})

Then ("Fast Triage {string} page is open", (s1:string)=>{
    planRunPageController.planPunFastTriageIsOpen(s1);
})

Then ("Scenario run {string} page is open", (s1:string)=>{
    planRunPageController.planPunScenarioRunIsOpen(s1);
})


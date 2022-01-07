/// <reference types="cypress" /> 
import { PlanRunsPageController } from "./PageController/planRunsPageController";
const { Given, When, Then } = require( "cypress-cucumber-preprocessor/steps");

let planRunsPageController: PlanRunsPageController = new PlanRunsPageController();

// Given

Given ("I navigate to the Plan runs page",() =>{ 
    planRunsPageController.openPlanTriagePage();
    planRunsPageController.clickPlanRunsButton();
} )

//When
When("the Plan runs page has loaded", () =>{
    planRunsPageController.planRunsPageLoaded();
})

When("I changed number of rows to {}", (n1:number) =>{
    planRunsPageController.planRunsChangeItemPerPage(n1);
})

When("I clicked on pagination right arrow to the last page", () =>{
    planRunsPageController.planRunsPageNavigateToLastPage();
})

When("I clicked on pagination left arrow to the first page", () =>{
    planRunsPageController.planRunsPageNavigateToFirstPage();
})

When("I entered {string} into runId search field", (s1:string) =>{
    planRunsPageController.planRunsPageEnterIntoRunIdSearchField(s1);
})

When("I entered {string} into Plan search field", (s1:string) =>{
    planRunsPageController.planRunsPageEnterIntoPlanSearchField(s1);
})

When("I entered {string} into Branch search field", (s1:string) =>{
    planRunsPageController.planRunsPageEnterIntoBranchSearchField(s1);
})

When("I entered {string} into Commit search field", (s1:string) =>{
    planRunsPageController.planRunsPageEnterIntoCommitSearchField(s1);
})

When("I entered {string} into Username search field", (s1:string) =>{
    planRunsPageController.planRunsPageEnterIntoUsernameSearchField(s1);
})

When("I entered {string} into Jobs search field", (s1:string) =>{
    planRunsPageController.planRunsPageEnterIntoJobsSearchField(s1);
})

When("I clicked on jobDetails icon", () =>{
    planRunsPageController.clickOnJobDetailsIcon();
})

//Then
Then ("I see the Plan runs page", () =>{
    planRunsPageController.planRunsPageIsLoaded();
})

Then ("Plan runs page button highlighted", () =>{
    planRunsPageController.planRunsButtonIsHighlighted();
})

Then ("I see the Plan runs list", () =>{
    planRunsPageController.planRunsListVisible();
})

Then ("I see {int} rows", (n1:number) =>{
    planRunsPageController.planRunsPaginationNumberIsChanged(n1);
})

Then ("I see disabled pagination right arrow", () =>{
    planRunsPageController.planRunsPageRightArrowPaginationIsDisabled();
})

Then ("I see disabled pagination left arrow", () =>{
    planRunsPageController.planRunsPageLeftArrowPaginationIsDisabled();
})

Then ("runs table item contains {string} as a runId", (s1:string) =>{
    planRunsPageController.planRunsRunIdSearchResults(s1);
})

Then ("I see no dava available in runs table", () =>{
    planRunsPageController.planRunPageNoRunsLineIsVisible();
})

Then ("runs table item contains {string} as a Plan", (s1:string) =>{
    planRunsPageController.planRunsRunPlanSearchResults(s1);
})

Then ("runs table item contains {string} as a Branch", (s1:string) =>{
    planRunsPageController.planRunsRunBranchSearchResults(s1);
})

Then ("runs table item contains {string} as a Commit", (s1:string) =>{
    planRunsPageController.planRunsRunCommitSearchResults(s1);
})

Then ("runs table item contains {string} as a Username", (s1:string) =>{
    planRunsPageController.planRunsRunUsernameSearchResults(s1);
})

Then ("runs table item contains {string} as a Jobs", (s1:string) =>{
    planRunsPageController.planRunsRunJobsSearchResults(s1);
})


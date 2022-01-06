/// <reference types="cypress" /> 

import { contains } from "cypress/types/jquery";

import { MarvelPageService } from "../PageService/MarvelPageService";
const planRunsPage = require('../PageObject/PlanRunsPage');
const pageHeader = require('../PageObject/PageHeader');

let marvelPageService: MarvelPageService = new MarvelPageService();

export class PlanRunsPageController{

    planTriagePageUrl: string = "https://dev-marvel2.zooxlabs.com/suiteoverview";
    
    //Features Asserions
    //PlanRunsPage.feature Assertions

    planRunsButtonIsHighlighted(){
        marvelPageService.shouldElement(pageHeader.activeButton,"contain","Plan Runs")
    }

    planRunsPageLoaded(){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableSelector, 'have.length', 26);
    }
    
    planRunsListVisible(){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableSelector, 'have.length', 26);
    }

    planRunsPageIsLoaded(){
        marvelPageService.shouldElementContainsVisible("Completion Time");
    }

    planRunsPaginationNumberIsChanged(num:number){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableSelector, 'have.length', num+1);
    }

    planRunsPageRightArrowPaginationIsDisabled(){
        marvelPageService.shouldElement(planRunsPage.planRunPagePaginationChevronRightSelector, 'have.attr','disabled')
    }
    planRunsPageLeftArrowPaginationIsDisabled(){
        marvelPageService.shouldElement(planRunsPage.planRunPagePaginationChevronLeftSelector,'have.attr','disabled')
    }

    //Search functionality assertions
    planRunsRunIdSearchResults(testText:string){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableRunIdSelector,"contain",testText)
    }

    planRunsRunPlanSearchResults(testText:string){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTablePlanSelector,"contain",testText)
    }

    planRunsRunBranchSearchResults(testText:string){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableBranchSelector,"contain",testText)
    }

    planRunsRunCommitSearchResults(testText:string){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableCommitSelector,"contain",testText)
    }

    planRunsRunUsernameSearchResults(testText:string){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableUsernameSelector,"contain",testText)
    }

    planRunsRunJobsSearchResults(testText:string){
        marvelPageService.shouldElement(planRunsPage.planRunPageRunsTableJobsSelector,"contain",testText)
    }

    planRunPageNoRunsLineIsVisible(){
        marvelPageService.shouldElement(planRunsPage.planRunPageNoRunsLineSelector,"contain.text","No data available")
    }


    //Feature Actions
    //PlanRunsPage.feature Checks

    //Feature Actions
    //PlanRunsPage.feature Actions

    clickPlanRunsButton(){
        marvelPageService.clickElement(pageHeader.planRunBrowserButtonSelector);
    }

    clickOnJobDetailsIcon(){
        marvelPageService.clickElement(planRunsPage.planRunPageRunsJobDetailsIconSelector);
    }

    planRunsChangeItemPerPage(num:number){
        marvelPageService.clickElement(planRunsPage.planRunPageRunsPaginationFieldSelector);
        marvelPageService.clickElementContains(planRunsPage.planRunPagePaginationdropDownSelector, num.toString())
    }

    planRunsPageEnterIntoRunIdSearchField(testText:string){
        marvelPageService.typeTextIntoElement(planRunsPage.planRunPageRunsRunIdSearchFieldSelector,testText)
    }

    planRunsPageEnterIntoPlanSearchField(testText:string){
        marvelPageService.typeTextIntoElement(planRunsPage.planRunPageRunsPlanSearchFieldSelector,testText)
    }

    planRunsPageEnterIntoBranchSearchField(testText:string){
        marvelPageService.typeTextIntoElement(planRunsPage.planRunPageRunsBranchSearchFieldSelector,testText)
    }

    planRunsPageEnterIntoCommitSearchField(testText:string){
        marvelPageService.typeTextIntoElement(planRunsPage.planRunPageRunsCommitSearchFieldSelector,testText)
    }

    planRunsPageEnterIntoUsernameSearchField(testText:string){
        marvelPageService.typeTextIntoElement(planRunsPage.planRunPageRunsUsernameSearchFieldSelector,testText)
    }

    planRunsPageEnterIntoJobsSearchField(testText:string){
        marvelPageService.typeTextIntoElement(planRunsPage.planRunPageRunsJobsSearchFieldSelector,testText)
    }

    planRunsPageNavigateToLastPage(){
        marvelPageService.clickOnPaginationSelectorNumberOfTimesCalculatedByPerPage(planRunsPage.planRunPageDataFooterPaginationSelector, planRunsPage.planRunBrowserNumPerPageDropdownSelectedSelector, planRunsPage.planRunPagePaginationChevronRightSelector)
    }

    planRunsPageNavigateToFirstPage(){
        marvelPageService.clickOnPaginationSelectorNumberOfTimesCalculatedByPerPage(planRunsPage.planRunPageDataFooterPaginationSelector, planRunsPage.planRunBrowserNumPerPageDropdownSelectedSelector, planRunsPage.planRunPagePaginationChevronLeftSelector)
    }

    openPlanTriagePage(){
        marvelPageService.openPage(this.planTriagePageUrl)
    }
}
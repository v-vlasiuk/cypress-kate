/// <reference types="cypress" /> 

import { contains } from "cypress/types/jquery";
import { MarvelPageService } from "../PageService/MarvelPageService";
import {FormatString} from "../PageService/MarvelPageService";
const planRunPage = require('../PageObject/PlanRunPage');

let marvelPageService: MarvelPageService = new MarvelPageService();

export class PlanRunPageController{

    planRunPageUrl: string = "https://dev-marvel2.zooxlabs.com/plan/run/{0}"

    //Feature Actions
    //PlanRunPage.feature Actions
    clickPlanRunPageSuiteDropdown(){
        marvelPageService.clickElement(planRunPage.planRunPageSuiteDropdownSelector);
    }

    selectPlanRunFirstTestListItem(){
        marvelPageService.clickFirstElement(planRunPage.planRunPageTestListCheckBoxesSelector);
    }

    clickPlanPunBulkEditButton(){
        marvelPageService.clickElement(planRunPage.planRunPageBulkEditButtonSelector);
    }
    
    planRunBulkUpdateWindowOpens(){
        marvelPageService.shouldElementContainsVisible("Bulk edit selected scenarios")
    }

    clickPlanPunFilterByIcon(){
        cy.get(planRunPage.planRunFilterBySelector).click()
    }

    clickPlanPunFilterByResultsDropdown(){
        cy.get(planRunPage.planRunFilterByResutlsDropdownSelector).click()
    }

    clickPlanPunFilterByResultsPassDropdownOption(){
        marvelPageService.shouldFirstElementBeClickable(planRunPage.planRunFilterByResutlsDropdownValuesSelector)
    }

    clickPlanPunFilterByResultsDropdownFilterButton(){
        marvelPageService.clickElement(planRunPage.planRunFilterByResutlsDropdownFilterButtonSelector)
    }

    clickPlanPunFastTriageButton(){
        marvelPageService.clickElement(planRunPage.planRunFastTriageButtonSelector)
    }

    clickPlanPunFirstItemResultsLink(){
        marvelPageService.clickFirstElement(planRunPage.planRunResultsItemsSelector)
    }

    //Features Asserions
    //PlanRunPage.feature Asserions
    planRunPageLoaded(){
        marvelPageService.shouldElement(planRunPage.planRunStateValueSelector, 'not.contain.text', 'Loading');
    }

    planRunFilterMenuIsShowingUp(){
        marvelPageService.shouldElement(planRunPage.planRunFilterByResutlsDropdownFilterButtonSelector,'contain', 'Filter');
    }

    planRunPlanDetailsLinkIsClickable(){
        marvelPageService.shouldElementBeClickable(planRunPage.planRunPlanDetailsLinkSelector)
    }

    planRunTestSuiteTitle( s1:string){
        marvelPageService.shouldElement(planRunPage.planRunTestSuiteTitleSelector, 'contain', s1)
    }

    planRunSuiteRunsListPresent(n1:number){
        this.clickPlanRunPageSuiteDropdown;
        marvelPageService.shouldElement(planRunPage.planRunPageSuiteDropdownItemsSelector, 'have.length' , n1)
    }

    planRunButtonBulkEditIsDisabled(){
        marvelPageService.shouldElement(planRunPage.planRunPageBulkEditButtonSelector,'have.attr','disabled');
    }

    planRunTestsRunsListPresent(n1:number){
        marvelPageService.shouldElement(planRunPage.planRunPageTestsRunsSelector, 'have.length' , n1)
    }

    planRunTextIsPresent(s1:string){
        marvelPageService.shouldElement(planRunPage.planRunPageSelector,'contain.text', s1)
    }

    planRunTextIsPresentInSummary(s1:string){
        marvelPageService.shouldElement(planRunPage.planRunPageResultSummarySelector,'contain.text',s1)
    }

    planRunTextIsPresentInCodeBranch(s1:string){
        marvelPageService.shouldElement(planRunPage.planRunCodeBranchValueSelector,'contain.text',s1)
    }

    planRunTextIsPresentInCommitHash(s1:string){
        marvelPageService.shouldElement(planRunPage.planRunCommitHashValueSelector,'contain.text',s1)
    }

    planRunTextIsPresentInCreatedAt(s1:string){
        marvelPageService.shouldElement(planRunPage.planRunCreatedAtValueSelector,'contain.text',s1)
    }

    planRunTextIsPresentInState(s1:string){
        marvelPageService.shouldElement(planRunPage.planRunStateValueSelector,'contain.text',s1)
    }

    planRunTextIsPresentInExtractors(s1:string){
        marvelPageService.shouldElement(planRunPage.planRunExtractorsValueSelector,'contain.text',s1)
    }

   
    //Redirect
    planPunFastTriageIsOpen(expectedURL:string){
        marvelPageService.shouldPageBeOpen(planRunPage.planRunFastTriageButtonSelector, expectedURL)
    }

    planPunScenarioRunIsOpen(expectedURL:string){
        marvelPageService.shouldPageBeOpen(planRunPage.planRunResultsItemsSelector, expectedURL)
    }

    //PlanPage for run id = s Actions
    openPlanRunPage(s:string){
        marvelPageService.openPage(FormatString(this.planRunPageUrl,s))
    }
   
}
/// <reference types="cypress" /> 

import { contains } from "cypress/types/jquery";
import { MarvelPageService } from "../PageService/MarvelPageService";
import {FormatString} from "../PageService/MarvelPageService";

const planRunComparePage = require('../PageObject/PlanRunComparePage');

let marvelPageService: MarvelPageService = new MarvelPageService();

export class PlanRunComparePageController{

    planRunCompareBasePageUrl: string = "https://dev-marvel2.zooxlabs.com/plan/run/{0}/compare/{1}"

    //Feature Actions
    //PlanRunComparePage.feature Actions
    clickPlanRunComparePageShowingDropdown(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareShowingDropDownSelector);
    }

    clickPlanRunComparePageShowingDropdownItem(itemContains:string){
        marvelPageService.clickElementContains(planRunComparePage.planRunCompareShowingDropDownValuesSelector, itemContains);
    }

    clickPlanRunComparePageControlSuiteDropdown(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareControlSuiteDropDownSelector);
    }

    clickPlanRunComparePageCandidateSuiteDropdown(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareCandidateSuiteDropDownSelector);
    }

    clickPlanRunComparePageSuiteCompareLink(){
        marvelPageService.shouldElementBeClickable(planRunComparePage.planRunComparePageSuiteComparisonLinkSelector)
    }

    clickPlanRunComparePageControlFastTriageButton(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareControlFastTriageButtonSelector);
    }

    clickPlanRunComparePageCandidateFastTriageButton(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareCandidateFastTriageButtonSelector);
    }

    clickPlanPunCompareCandidateFilterByButton(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareCandidateFilterByButtonSelector);
    }

    clickPlanPunCompareControlFilterByButton(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareControlFilterByButtonSelector);
    }
    
    clickPlanPunCompareFilterByDropdown(itemContains:string){
        marvelPageService.clickElementContainsRegExp(planRunComparePage.planRunCompareFilterByResultsDropdownSelector, itemContains);
    }

    clickPlanPunCompareFilterByResultsPassDropdownOption(itemContains:string){
        marvelPageService.clickElementContainsRegExp(planRunComparePage.planRunCompareFilterByResultsDropdownValuesSelector, itemContains);
    }

    clickPlanPunCompareFilterByResultsDropdownFilterButton(){
        marvelPageService.clickElement(planRunComparePage.planRunCompareFilterByResultsDropdownFilterButtonSelector);
    }

    clickPlanRunCompareRightPaginationIcon(numberOfClicks:number){
        marvelPageService.clickElementNumberOfTimes(planRunComparePage.planRunCompareTopRightPaginationIconSelector, numberOfClicks);
    }

    enterPlanRunCompareItemIntoScenarioIdsField(scenarioIdsString:string){
        marvelPageService.typeTextIntoElement(planRunComparePage.planRunCompareFilterByScenarioIdsDropdownSelector, scenarioIdsString);

    }
    //Features Asserions
    //PlanRunComparePagePage.feature Asserions
    planRunComparePageLoaded(){
        //cy.wait(2000)
        marvelPageService.shouldElement(planRunComparePage.planRunCompareControlStateValueSelector, 'not.contain.text', 'Loading');
        marvelPageService.shouldElement(planRunComparePage.planRunCompareCandidateStateValueSelector, 'not.contain.text', 'Loading');
    }

    planRunCompareCandidateTitleIsVisible(s1:string){

        marvelPageService.shouldElementContains(planRunComparePage.planRunCompareCandidateTestSuiteTitleSelector, s1)
    }

    planRunCompareControlTitleIsVisible(s1:string){
        marvelPageService.shouldElementContains(planRunComparePage.planRunCompareControlTestSuiteTitleSelector, s1)
    }

    planRunCompareTestsRunsListPresent(n1:number){
        marvelPageService.shouldElement(planRunComparePage.planRunComparePageTestsRunsSelector, 'have.length' , n1)
    }

    planRunCompareTextIsPresentInCandidateResults(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareCandidateResultsContainerSelector,'contain.text', s1)
    }

    planRunCompareTextIsPresentInControlResults(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareControlResultsContainerSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForCandidate(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderCandidateInfoSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForControl(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderControlInfoSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForCandidatePlanRun(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderCandidatePlanRunSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForControlPlanRun(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderControlPlanRunSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForCandidateBranch(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderCandidateCodeBranchValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForControlBranch(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderConrolCodeBranchValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForCandidateCommitHash(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderCandidateCommitHashValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForControlCommitHash(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderControlCommitHashValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForCandidateCreatedAt(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderCandidateCreatedAtValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForControlCreatedAt(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderControlCreatedAtValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForCandidateState(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderCandidateStateValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForControlState(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderControlStateValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForCandidateExtractors(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderCandidateExtractorValueSelector,'contain.text',s1)
    }

    planRunCompareTextIsPresentInHeaderForControlExtractors(s1:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareHeaderControlExtractorValueSelector,'contain.text',s1)
    }

    planRunCompareRunsListItemsNumber(n1:number){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareListItemTitleSelector,'contain.text',n1.toString())
    }
    
    planRunCompareSuiteItemsNumber(n1:number){
        marvelPageService.shouldElement(planRunComparePage.planRunComparePageSuiteDropdownItemsSelector, 'have.length' , n1)
    }

    planRunCompareFilterMenuIsShowingUp(){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareFilterByResultsDropdownFilterButtonSelector,'contain.text','Filter');
    }

    planPunCompareScenarioComparisonIsOpen(s:string){
        marvelPageService.shouldPageBeOpen(planRunComparePage.planRunComparePageSuiteComparisonLinkSelector, s);
    }

    planPunCompareFastTriageCandidateIsOpen(s:string){
        marvelPageService.shouldPageBeOpen(planRunComparePage.planRunCompareCandidateFastTriageButtonSelector, s);
    }

    planPunCompareFastTriageControlIsOpen(s:string){
        marvelPageService.shouldPageBeOpen(planRunComparePage.planRunCompareControlFastTriageButtonSelector, s);
    }

    planPunCompareFilteringCandidateContains(expectedText:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareFilteringCandidateByValueSelector,"contain",expectedText)
    }

    planPunCompareFilteringControlContains(expectedText:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareFilteringControlByValueSelector,"contain",expectedText)
    }

    planPunCompareCandidateResultsBoxesColorIs(colorString:string){
        marvelPageService.shouldElementHaveColor(planRunComparePage.planRunCompareListCandidateItemsResultsSelector, 
            eval('planRunComparePage.planRunCompareListItemsResults' + colorString + 'ColorValue'))
    }

    planPunCompareControlResultsBoxesColorIs(colorString:string){
        marvelPageService.shouldElementHaveColor(planRunComparePage.planRunCompareListControlItemsResultsSelector, 
            eval('planRunComparePage.planRunCompareListItemsResults' + colorString + 'ColorValue'))
    }

    planPunCompareErrorMessagePopupContainsMessage(expectedText:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareAllertMessagePopupSelector,"contain",expectedText)
    }

    planPunCompareTableWarningMessageContainsMessage(expectedText:string){
        marvelPageService.shouldElement(planRunComparePage.planRunCompareAllertMessageTableSelector,"contain",expectedText)
    }
    //PlanPage for runs id1 = s1,id2 = s2 Actions
    openPlanRunComparePage(s1:string, s2:string){
        marvelPageService.openPage(FormatString(this.planRunCompareBasePageUrl,s1,s2))
    }
    
}
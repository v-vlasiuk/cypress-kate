/// <reference types="cypress" /> 
class PlanRunComparePage {

    planRunCompareAllertMessagePopupSelector : string = ".v-alert";
    planRunCompareAllertMessageTableSelector : string = ".v-card > .row > .col > .v-alert";

    //css:
    planRunCompareListItemsResultsGreenColorValue = "rgb(76, 175, 80)";
    planRunCompareListItemsResultsOrangeColorValue = "rgb(255, 152, 0)";
    planRunCompareListItemsResultsRedColorValue = "rgb(244, 67, 54)";

    planRunCompareCandidateStateValueSelector : string = ":nth-child(1) > .v-card__text > .inline-flex > :nth-child(14)";
    planRunCompareControlStateValueSelector : string = ":nth-child(3) > .v-card__text > .inline-flex > :nth-child(14)";
    planRunCompareCandidateSubtitleSelector: string = ":nth-child(1) > :nth-child(1) > .v-card__subtitle > a";
    planRunCompareControlSubtitleSelector: string = ":nth-child(1) > :nth-child(3) > .v-card__subtitle > a";
    planRunCompareCandidateTestSuiteTitleSelector: string = ":nth-child(1) > .v-card__title";
    planRunCompareControlTestSuiteTitleSelector: string = ":nth-child(3) > .v-card__title";
    planRunCompareCandidateResultsContainerSelector: string = ":nth-child(3) > .v-card__text > .container";
    planRunCompareControlResultsContainerSelector: string = ":nth-child(5) > .v-card__text > .container";
    planRunComparePageTestsRunsSelector: string = ".v-list-item .container.pa-0";
    planRunCompareHeaderCandidateInfoSelector: string = ":nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .v-card__text";
    planRunCompareHeaderCandidateCodeBranchValueSelector: string = ":nth-child(1) > .v-card__text > .inline-flex > :nth-child(2)";
    planRunCompareHeaderControlInfoSelector: string = ":nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3) > .v-card__text";
    planRunCompareHeaderConrolCodeBranchValueSelector: string = ":nth-child(3) > .v-card__text > .inline-flex > :nth-child(2)";
    planRunCompareHeaderCandidateCommitHashValueSelector: string = ":nth-child(1) > .v-card__text > .inline-flex > :nth-child(4)";
    planRunCompareHeaderControlCommitHashValueSelector: string = ":nth-child(3) > .v-card__text > .inline-flex > :nth-child(4)";
    planRunCompareHeaderCandidateCreatedAtValueSelector: string = ":nth-child(1) > .v-card__text > .inline-flex > :nth-child(6)";
    planRunCompareHeaderControlCreatedAtValueSelector: string = ":nth-child(3) > .v-card__text > .inline-flex > :nth-child(6)";
    planRunCompareHeaderCandidateExtractorValueSelector: string = ":nth-child(1) > .v-card__text > .inline-flex > :nth-child(10)";
    planRunCompareHeaderControlExtractorValueSelector: string = ":nth-child(3) > .v-card__text > .inline-flex > :nth-child(10)";
    planRunCompareHeaderCandidatePlanRunSelector: string = ":nth-child(1) > .v-card__text > .inline-flex > :nth-child(12)";
    planRunCompareHeaderControlPlanRunSelector: string = ":nth-child(3) > .v-card__text > .inline-flex > :nth-child(12)";
    planRunCompareHeaderCandidateStateValueSelector: string = ":nth-child(1) > .v-card__text > .inline-flex > :nth-child(14)";
    planRunCompareHeaderControlStateValueSelector: string = ":nth-child(3) > .v-card__text > .inline-flex > :nth-child(14)";
    planRunCompareListItemTitleSelector: string = ":nth-child(1) > .v-list-item__content > .v-list-item__title";
    planRunCompareListCandidateItemsResultsSelector: string = "div.row > div:nth-child(4)> .v-card";
    planRunCompareListControlItemsResultsSelector: string = "div.row > div:nth-child(5)> .v-card";

    planRunCompareShowingDropDownSelector: string =".col-9 > .row > .col > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections";
    planRunCompareShowingDropDownValuesSelector: string = ".v-menu__content div.v-list-item__content";


    planRunCompareControlSuiteDropDownSelector: string = ".v-card__title.pl-0 > .row > :nth-child(2)";
    planRunCompareCandidateSuiteDropDownSelector: string = ".v-card__title.pl-0 > .row > :nth-child(3)";
    planRunComparePageSuiteDropdownItemsSelector: string ="div .v-menu__content .v-list-item .v-list-item__content .v-list-item__title";
    planRunCompareCandidateFastTriageButtonSelector: string = ":nth-child(3) > .v-card__title > :nth-child(2) > .shrink > .mx-2";
    planRunCompareControlFastTriageButtonSelector: string = ":nth-child(5) > .v-card__title > :nth-child(2) > .shrink > .mx-2";

    planRunComparePageSuiteComparisonLinkSelector: string = ":nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .col-5 > .v-card__title > a";
    
    //Pagination:
    planRunCompareTopRightPaginationIconSelector : string = ".v-list :first-child .mdi-chevron-right";

    //Filters dropdown
    planRunCompareCandidateFilterByButtonSelector: string = ":nth-child(3) > :nth-child(1) > .v-btn";
    planRunCompareControlFilterByButtonSelector: string = ":nth-child(3) > :nth-child(2) > .v-btn";
    planRunCompareFilterByResultsDropdownFilterButtonSelector: string = ".menuable__content__active > .v-card > .v-card__text > .v-btn";
    planRunCompareFilterByResultsDropdownSelector: string = ".menuable__content__active > .v-card > .v-card__text";
    planRunCompareFilterByResultsDropdownValuesSelector: string = ".v-list.v-select-list";
    planRunCompareFilterByScenarioIdsDropdownSelector: string = "div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1)";
   // planRunCompareFilterByAllTagsDropdownValuesSelector: string = ".v-list.v-select-list";
    planRunCompareFilteringCandidateByValueSelector: string = ":nth-child(4) > .col > :nth-child(1)";
    planRunCompareFilteringControlByValueSelector: string = ":nth-child(4) > .col > :nth-child(2)";


}

module.exports = new PlanRunComparePage()
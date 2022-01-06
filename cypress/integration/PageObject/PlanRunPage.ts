/// <reference types="cypress" /> 
class PlanRunPage {

    planRunPageSelector: string = ".v-main__wrap";
    planRunListItemContentSelector: string = ".v-list-item__content";
    planRunPlanDetailsLinkSelector: string = ".inline-flex > :nth-child(14) > a";
    planRunTestSuiteTitleSelector: string = ".text-h5";
    planRunPageSuiteDropdownSelector: string = ".v-select__selection";
    planRunPageSuiteDropdownItemsSelector: string = "div .v-menu__content .v-list-item .v-list-item__content .v-list-item__title";
    planRunPageBulkEditButtonSelector: string = ".v-btn--tile";
    planRunPageTestListCheckBoxesSelector: string = ".v-input--selection-controls__ripple";
    planRunFilterBySelector: string = ".mdi-filter-variant";
    planRunFilterByResutlsDropdownSelector : string =":nth-child(8) > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections";
    planRunFilterByResutlsDropdownValuesSelector : string = ".v-menu__content .v-list-item__content";
    planRunPageTestsRunsSelector: string =".container > .row";
    planRunFilterByResutlsDropdownFilterButtonSelector :string = ".v-card__text > .v-btn > .v-btn__content";
    planRunPageResultSummarySelector: string = ":nth-child(3) > .text-center";
    planRunCodeBranchSelector: string = ".inline-flex > :nth-child(1)";
    planRunCodeBranchValueSelector: string = ".inline-flex > :nth-child(2)";
    planRunCommitHashValueSelector: string = ".inline-flex > :nth-child(4)";
    planRunCreatedAtValueSelector: string = ".inline-flex > :nth-child(6)";
    planRunExtractorsValueSelector: string = ".inline-flex > :nth-child(10)";
    planRunStateValueSelector: string = ".inline-flex > :nth-child(12)";
    planRunFastTriageButtonSelector: string = ".col-4 > :nth-child(1) > :nth-child(1) > .v-btn";
    planRunResultsItemsSelector: string = ".col .v-card .row .col:nth-child(4) div.v-card__title > .white--text"
}

module.exports = new PlanRunPage()
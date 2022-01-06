/// <reference types="cypress" /> 
class PlanRunsPage {

    planRunBrowserNumPerPageDropdownFieldSelector: string = ".v-select__selection";
    planRunBrowserNumPerPageDropdownSelector: string =  ".v-select-list";
    planRunBrowserNumPerPageDropdownSelectedSelector: string =  ".v-select__selection--comma"
    planRunPageFooterSelectSelector: string = ".v-data-footer__select";
    planRunPageRunsTableSelector: string ="tbody>tr";
    planRunPageRunsPaginationFieldSelector: string =".v-select__selection";
    planRunPagePaginationdropDownSelector: string  = ".v-select-list";
    planRunPageLoadingAssertionSelector: string = ".v-alert__content";
    planRunPageTableSelector: string ="table";
    planRunPageContainerSelector: string = ".container.align-items-start.container--fluid.fill-height";
    planRunPageDataFooterPaginationSelector: string = ".v-data-footer__pagination";
    planRunPagePaginationChevronRightSelector: string = ".v-data-footer__icons-after button";
    planRunPagePaginationChevronLeftSelector: string = ".v-data-footer__icons-before button";
    planRunPageRunsTableRecordSelector: string = "td.text-left";
    planRunPageRunsRunIdSearchFieldSelector:string = ":nth-child(2) > .v-input";
    planRunPageRunsTableRunIdSelector:string = ".text-left";
    planRunPageNoRunsLineSelector:string =".v-data-table__empty-wrapper";
    planRunPageRunsPlanSearchFieldSelector:string =":nth-child(5) > .v-input";
    planRunPageRunsTablePlanSelector:string =":nth-child(1) > :nth-child(5)"
    planRunPageRunsBranchSearchFieldSelector:string = ":nth-child(6) > .v-input";
    planRunPageRunsTableBranchSelector:string =":nth-child(1) > :nth-child(6)"
    planRunPageRunsCommitSearchFieldSelector:string =":nth-child(7) > .v-input";
    planRunPageRunsTableCommitSelector:string =":nth-child(1) > :nth-child(7)"
    planRunPageRunsUsernameSearchFieldSelector:string =":nth-child(8) > .v-input";
    planRunPageRunsTableUsernameSelector:string =":nth-child(1) > :nth-child(8)"
    planRunPageRunsJobsSearchFieldSelector:string =":nth-child(9) > .v-input";
    planRunPageRunsJobDetailsIconSelector:string = ":nth-child(9) > .v-icon";
    planRunPageRunsTableJobsSelector:string=":nth-child(1) > .col-7";
}

module.exports = new PlanRunsPage()
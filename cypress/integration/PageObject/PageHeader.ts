/// <reference types="cypress" /> 

class PageHeader{

    planRunBrowserButtonSelector = '[href="/planrunbrowser/"] > .v-btn__content'
    activeButton ='.v-btn--active'
} 

module.exports = new PageHeader();
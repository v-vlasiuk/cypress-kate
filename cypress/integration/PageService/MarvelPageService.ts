/// <reference types="cypress" /> 

import { contains } from "cypress/types/jquery";

export function FormatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
      str = str.replace(`{${index}}`, val[index]);
    }
    return str;
  }

export class MarvelPageService{
    
    //Common Asertions
    shouldElementContainsVisible(elementContains:string){
       return cy.contains(elementContains).should("be.visible");
    }

    shouldElementBeClickable(element:string){
        return cy.get(element).click({});
    }

    shouldFirstElementBeClickable(element:string){
        return cy.get(element).first().click();
    }

    shouldElementContains(element:string, elementContains:string){
        return cy.get(element).contains(elementContains).should("be.visible");
    }

    shouldPageBeOpen(redirectLinkSelector:string, expectedURL:string){
        cy.get(redirectLinkSelector).eq(0).should($a => {
          expect($a.attr('href'), 'href').to.equal(expectedURL)
          expect($a.attr('target'), 'target').to.equal('_blank')
          //$a.attr('target', '_self')
          $a.removeAttr('target')
        }).click();
      return cy.location('pathname').should('equal', expectedURL.split("?")[0]);  
    }

    shouldElement(element: string, checkType: string, value: any){
        return cy.get(element).should(checkType, value);
    }

    shouldElementHaveColor(element: string, value: any){
        return cy.get(element).should('have.css', 'background-color', value);
    }

    //Common Checks

    //Common Actions
    // Get window object
    openPage(pageUrl:string, ){
        cy.window().then(win => {
            // set the token
            cy.authenticateUsingToken(win);
        });
        cy.visit(pageUrl, {timeout: 40000});
    }

    clickElement(element:string){
        cy.get(element).click();
    }
    
    clickFirstElement(element:string){
        cy.get(element).first().click();
    }

    clickElementContains(element:string, contains:string){
        cy.get(element).contains(contains).click({ force: true })
    }

    clickElementContainsRegExp(element:string, containsRegExp:string){
        cy.get(element).contains(new RegExp("^" + containsRegExp + "$", "g")).click({ force: true })
    }

    clickElementNumberOfTimes(element:string, numberOfClicks: number){
        for(let i = 0; i < numberOfClicks; i ++){
        cy.get(element).click()
        }
    }

    typeTextIntoElement(element:string, typeText:string){
        cy.get(element).type(typeText);
    }

    clickOnPaginationSelectorNumberOfTimesCalculatedByPerPage(paginationSelector: string, numberPerPageValueSelector:string, paginationIconSelector: string){
        // $btn is the object that the previous command yielded 
        cy.get(paginationSelector).then(($el) => {
            cy.get(numberPerPageValueSelector).then(($el_1) => {
                var numberPerPage:number = +$el_1.text();
                var paginationNumsArray: string[] = $el.text().split(" ");
                var numberOfItems: number= +paginationNumsArray[paginationNumsArray.length-1];
                var timesToClick: number = Math.floor(numberOfItems/numberPerPage);
                if (numberOfItems % numberPerPage == 0){
                    timesToClick --;
                }
                for (var _i = 0; _i < timesToClick; _i++) {
                    cy.get(paginationIconSelector).click();
                    }
            });
        });
    }
}
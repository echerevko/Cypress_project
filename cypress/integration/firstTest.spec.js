///<reference types="Cypress" />

context('Todos', function(){
    it('should show #main', function() {
        cy.get('.main').should('be.visible')
        cy.contains('Hello')
    })
})

it('By ID', ()=> {
    cy.visit('https://facebook.com/')
    cy.get('#email')
});

it('By Class', ()=> {
    cy.visit('https://www.selenium.dev/')
    cy.get('.navbar-logo')
});

it('By Tag', ()=> {
    cy.visit('https://www.selenium.dev/')
    cy.get('nav')
});

it('By Tag Value', ()=> {
    cy.visit('https://facebook.com/')
    cy.get('[name="pass"]')
});

it('By Different Tags', ()=> {
    cy.visit('http://idealofsweden.com/')
    cy.get('[data-action="open-favourites-overlay"][data-vwo="header-favouritesicon-mobile"]')
});

it('By Different Types', ()=> {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress#Our-mission')
    cy.get('button[type="button"][aria-label="Search"]')
});

it.only('By Contains Name', ()=> {
    cy.visit('https://next.privat24.ua/')
    cy.get('*[class^="card"]')
});


// get and find
it('How to use get with find/eq', ()=> {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('How to use get with find/eq', ()=> {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq')
    cy.get('[class^="scrollactive-nav"]').find('li').find('a').eq('0')
});


///<reference types="Cypress" />

it('', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in')
})

it('', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div','Sign in')
})

it('', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('SIGN in', {matchCase:false})
})

it.only('', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('section').contains('Add to cart', {matchCase:false})
})
///<reference types="cypress-xpath" />

//type
it('type', () => {
    cy.visit('https://next.privat24.ua/mobile?leng=eng')
    .get('[data-qa-node="phone-number"]')
    .type(1234567890)
})

//focus
it('focus', () => {
    cy.visit('https://next.privat24.ua/mobile?leng=eng')
    .get('[data-qa-node="amount"]')
    .focus()
})

//blur
it('blur', () => {
    cy.visit('https://next.privat24.ua/mobile?leng=eng')
    .get('[data-qa-node="amount"]')
    .focus()
    .blur()
})

//clear
it('clear', () => {
    cy.visit('https://next.privat24.ua/mobile?leng=eng')
    .get('[data-qa-node="amount"]')
    .type(999)
    .wait(2000)
    .clear()
})

//submit form
it('clear', () => {
    cy.visit('https://next.privat24.ua/mobile?leng=eng')
    .get('form[method="post"]')
    .submit()
})

//click
it('click', () => {
    cy.visit('https://next.privat24.ua/mobile?leng=eng')
    .get('[data-qa-value="manual"]')
    .click()
})

//right click
it('rightclick', () => {
    cy.visit('https://next.privat24.ua/mobile?leng=eng')
    .get('[data-qa-value="manual"]')
    .rightclick()
})

//check uncheck
it('Add ', () => {
    cy.visit('https://idealofsweden.com')
    cy.xpath("//button[@data-action='add-to-basket']")
    .first().
    click()
    cy.get('.basket-icon').click()
        .get('#id="newsletter_check"')
        .uncheck()
})


it('check', () => {
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .wait(1000)
        .check({force: true})
        .wait(4000)
        .uncheck({force: true})      
})


//scrollntoView
it('scrollntoView', () => {
    cy.visit('https://next.privat24.ua/')
        .get('[data-qa-node="currencyB"]')
        .wait(3000)
        .scrollIntoView()      
})

//scrollTo
it('scrollTo', () => {
    cy.visit('https://next.privat24.ua/')
        .wait(2000)
    cy.scrollTo(0, 6000)      
})

//triger
it.only('Add', () => {
    cy.visit('https://next.privat24.ua/?leng=en')
        .contains('Сервіси')
        .trigger('mouseover')
})



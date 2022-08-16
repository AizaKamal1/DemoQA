/// <reference types="cypress" />

describe('Text box', ()=>{

    it.only('form assertion', ()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Practice Form').click()

    cy.get('#firstName').type('Aiza').should('have.value', 'Aiza')
    cy.get('#lastName').type('Kamal').should('have.value', 'Kamal')
    cy.get('#userEmail').type('abc@gmail.com').should('have.value', 'abc@gmail.com')
    cy.contains('.practice-form-wrapper','Student Registration Form').find('[type = "radio"]').then(radio =>{
        cy.wrap(radio)
        .eq(1)
        .check({force: true})
        .should('be.checked')
         })
    cy.get('#userNumber').type('1234567890').should('have.value', '1234567890')
    cy.get('#subjectsInput').type('Physics').type('{enter}')
    cy.get('[type="checkbox"]').eq(1).check({force: true})
    const p = 'BB.jpg'
    cy.get('#uploadPicture').attachFile(p)
    cy.get('#currentAddress').click({force:true}).type('123 city').should('have.value', '123 city')
   cy.contains('Submit').click()
    })
})
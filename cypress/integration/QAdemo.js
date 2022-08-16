/// <reference types="cypress" />

// const { should } = require("chai")
import QADemo from "../POM/pom"

const QaDemopage = new QADemo()
const TextBox = QaDemopage.textbox


describe('Text box', ()=>{

    it.only('first test case', ()=> {
        cy.visit('/')
        cy.contains('TextBoxs').click()
        cy.contains('Elements').click()

        TextBox.FullName().invoke('text').then( text => {
            expect(text).to.equal('Full Name')
        })

        TextBox.Email().invoke('text').then( email => {
            expect(email).to.equal('Email')
        })

        TextBox.Current().invoke('text').then( currentaddress => {
            expect(currentaddress).to.equal('Current Address')
        })

        TextBox.Permanent().invoke('text').then( permanentAddress => {
            expect(permanentAddress).to.equal('Permanent Address')
        })


        TextBox.FullName().should('contain', 'Full Name')
        TextBox.Email().should('contain', 'Email')
        TextBox.Current().should('contain', 'Current Address')
        TextBox.Permanent().should('contain','Permanent Address')

        TextBox.Submit().click()

    })


    it('Assertion value', ()=> {
        cy.visit('/')
        cy.contains('TextBoxs').click()
        cy.contains('Elements').click()

        cy.get('#userName').type('ABC').should('have.value', 'ABC')
        cy.get('#userEmail').type('abc@email.com').should('have.value', 'abc@email.com')
        cy.get('#currentAddress').type('123 city').should('have.value', '123 city')
        // cy.get('#permanentAddress').type('123 city aplha').should('have.value', '123 city alpha')

        TextBox.Submit().click()
    })



    it('form assertion', ()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Practice Form').click()

        // .type('Aiza').should('have.value', 'Aiza')
        // cy.get('#lastName').type('Kamal').should('have.vale', 'Kamal')
    
        // cy.get('#userEmail').type('abc@gmail.com').should('have.value', 'abc@gmail.com')
        // cy.get('#userNumber').type('1234567890').should('have.value', '1234567890')
        // cy.get('#subjectsInput').type('CS').should('have.value', 'CS')
        // cy.get('#currentAddress').type('123 city').should('have.value', '123 city')
    })
})
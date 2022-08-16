/// <reference types= "cypress" />

class QADemo{


    textbox=
    {
        FullName:()=>
        cy.get('[id="userName-label"]'),
        Email:()=>
        cy.get('[id="userEmail-label"]'),
        Current: ()=>
        cy.get('[id="currentAddress-label"]'),
        Permanent: ()=>
        cy.get('[id="permanentAddress-label"]'),
        Submit: ()=>
        cy.contains('Submit')
    }

 }
    export default QADemo

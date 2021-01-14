/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {

        cy.visit("/index.html");

        
        cy.get('[data-cy="formulario"]')
            .submit();

        //Seleccionar alerta dinamica|
        cy.get('[data-cy=alerta]')
            //.should('have.class', 'alert-danger')//se puede hacer la siguiente prueba y esta en un solo de esta forma
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-danger');

    }) 
})
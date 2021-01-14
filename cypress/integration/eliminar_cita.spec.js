/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Llena los campos para una nueva cita y la elimina', () => {

        cy.visit("/index.html");

        cy.get('[data-cy=mascota-input]')    
            .type('Hook');
        cy.get('[data-cy=propietario-input]')    
            .type('Juan');
        cy.get('[data-cy=telefono-input]')    
            .type('394238424');
        cy.get('[data-cy=fecha-input]')    
            .type('2021-10-01');
        cy.get('[data-cy=hora-input]')    
            .type('20:30');
        cy.get('[data-cy=sintomas-textarea]')    
            .type('El gato solo come y duerme');
        cy.get('[data-cy=submit-cita]')    
            .click();
        
        cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('equal', 'Administra tus Citas'); 

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
        
        //cy.screenshot(); //podemos tomar un screenshot de la app en un momento exacto
    }) 

    it('Eliminar una cita', () => {
        cy.get('[data-cy=btn-eliminar]')  
            .click();

        cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('equal', 'No hay Citas, comienza creando una'); 

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se elimino correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-warning');


    })
})
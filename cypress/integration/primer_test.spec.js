/// <reference types="cypress" />

describe("Carga la página principal", () => {
  it("Carga la página princial", () => {
    cy.visit("/index.html");
 
    //Verificar el elemento y su texto
    cy.contains(
      '[data-cy="titulo-proyecto"]',
      "Administrador de Pacientes de Veterinaria"
    );

    //cy.get("h1").should("exist"); //esto es muy generico asi que no se debe hacer ya que puede haber mucho h1 lo mismo pasaria con un button o algo asi

    //Verificar que exista
    cy.get('[data-cy="titulo-proyecto"]').should("exist"); //Esto es cambio es una buena practica ya que estamos buscando en base a un atributo que agregamos propio en el html para cypress

    //La combinacion de las 2, osea verificar que exista el elemento y que contenga un texto
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");

    cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('equal', 'No hay Citas, comienza creando una');

    cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('not.equal', 'Juan Pablo');

  });
});

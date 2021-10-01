/// <reference types="cypress" />

const faker = require("faker");

context("License", () => {
  beforeEach(() => {
    cy.visit("/");

    const email = Cypress.env("email");
    const password = Cypress.env("password");

    cy.login(email, password);
  });

  it("edit a provider adding License", () => {
    cy.get("table").contains("div", "Challenge").click();
    cy.get("button.breadcrumb-i").eq(1).should("include.text", "Challenge");
    cy.get('[data-cy="addLicense"]').click();
    cy.get('[data-cy="state"]').click();
    cy.get('[data-cy="state-list"]').children().first().click();
    cy.get('[data-cy="licenseNumber"]').type(faker.datatype.number());
    cy.get('[data-cy="licenseType-list"]')
      .contains("div", "No data found")
      .should("not.exist");
    cy.get('[data-cy="licenseType"]').click();
    cy.get('[data-cy="licenseType-list"]')
      .contains("button", "Doctor of Osteopathy")
      .click();
    cy.get('[data-cy="Save & Verify"]').click();
    cy.get("h2").should("have.text", "Doctor of Osteopathy");
  });

  it("edit a License", () => {
    cy.get("table").contains("div", "Challenge").click();
    cy.get("button.breadcrumb-i").eq(1).should("include.text", "Challenge");
    cy.get("table").contains("div", "Doctor of Osteopathy").click();
    cy.get("h2").should("have.text", "Doctor of Osteopathy");
    cy.get("div.comp-loader").should("not.exist");
    cy.get('[data-cy="edit"]').click();
    cy.get('[data-cy="Restricted"]').check();
    cy.get('[data-cy="Save"]').click();
    cy.get('[data-cy="restrictionStatus"]')
      .contains("div", "Restricted")
      .should("be.visible");
  });

  it("remove a License", () => {
    cy.get("table").contains("div", "Challenge").click();
    cy.get("button.breadcrumb-i").eq(1).should("include.text", "Challenge");
    cy.get('[data-cy="license-overview"]').within(() => {
      cy.get('[data-cy="more"]').click();
    });
    cy.get('[data-cy="remove-d"]').click();
    cy.get('[data-cy="Yes, remove"]').click();
    cy.get('[data-cy="license-overview"]').within(() => {
      cy.contains("div", "Doctor of Osteopathy").should("not.exist");
    });
  });
});

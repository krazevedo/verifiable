// <reference types="cypress" />
import { email, password } from "../../fixtures/credentials";

const faker = require("faker");

context("Providers", () => {
  beforeEach(() => {
    cy.login(email, password);
  });

  it("create a new provider", () => {
    const firstName = faker.name.firstName();

    cy.get('[data-cy="addProvider"]').click();
    cy.get('[data-cy="firstName"]').type(firstName);
    cy.get('[data-cy="lastName"]').type("Challenge");
    cy.get('[data-cy="Submit"]').click();
    cy.get("button.breadcrumb-i")
      .eq(1)
      .should("have.text", firstName + " Challenge");
  });

  it("edit a provider adding Education Certificates", () => {
    cy.get("table").contains("div", "Challenge").click();
    cy.get("button.breadcrumb-i").eq(1).should("include.text", "Challenge");
    cy.get('[data-cy="addBoard"]').click();
    cy.get('[data-cy="boardName"]').click();
    cy.get('[data-cy="boardName-list"]')
      .contains("button", "American Board of Internal Medicine")
      .click();
    cy.get('[data-cy="certificationNumber"]').type(faker.datatype.number());
    cy.get('[data-cy="Save & Verify"]').click();
    cy.get("h2").should("have.text", "American Board of Internal Medicine");
  });

  it("delete a provider", () => {
    cy.get('[name="search"]').eq(1).type("Challenge");
    cy.get("table").contains("div", "Challenge").click();
    cy.get("button.breadcrumb-i").eq(1).should("include.text", "Challenge");
    cy.get('[data-cy="more"]').first().click();
    cy.get('[data-cy="removeProvider-d"]').click();
    cy.get('[data-cy="Yes, remove"]').click();
  });
});

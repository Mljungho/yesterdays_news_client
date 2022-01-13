/* eslint-disable no-undef */
describe("Visitor can see a single article", () => {
  before(() => {
    cy.intercept("GET", "**/api/article/**", {
      fixture: "articleShowResponse.json",
    }).as("getArticle");
    cy.visit("/");
  });

  it("is expected to make a GET request to the API", () => {
    cy.wait("@getArticle").its("request.method").should("eq", "GET");
  });

  it("is expected to display correct url", () => {
    cy.url().should("contain", "360");
  });

  it("is expected to see article title", () => {
    cy.get("[data-cy=article-title]").should("contain", "Latin News");
  });

  it("is expected to see article published date", () => {
    cy.get("[data-cy=article-created]").should("contain", "2022-01-13");
  });
});

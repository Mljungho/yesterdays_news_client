/* eslint-disable no-undef */
describe("A user visiting the application can display articles by categories", () => {
  before(() => {
    cy.intercept("GET", "/api/articles", {
      fixture: "articlesIndexResponse.json",
    });
    cy.visit("/");
  });

  describe('can switch to "Politics" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "politicsArticlesResponse.json",
      }).as("politicsArticles");
      cy.get("[data-cy=politics-view]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@politicsArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see a collection of articles", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .should("have.length", 4);
    });

    it("is expected to see a collection of adds", () => {
      cy.get("[data-cy=commercial-collection]")
        .children()
        .should("have.length", 4);
    });

    

    it("is expected to see politics article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]")
            .should("contain.text", "Quo Vadis")
            .and("be.visible");
        });
    });

    it("is expected to see politics article teaser", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-teaser]")
            .should("contain.text", "Man is driven to create; I know I really love to create thin...")
            .and("be.visible");
        });
    });

    it("is expected to see politics article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]")
            .should("contain.text", "2022-01-23T12:02:56.139Z")
            .and("be.visible");
        });
    });
  });

  describe('can switch to "Sports" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "sportsArticlesResponse.json",
      }).as("sportsArticles");
      cy.get("[data-cy=sports-view]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@sportsArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see sports article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]")
            .should("contain.text", "A Many-Splendoured Thing")
            .and("be.visible");
        });
    });

    it("is expected to see sports article teaser", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-teaser]")
            .should("contain.text", "I didn't work hard to make Ruby perfect for everyone, becaus...")
            .and("be.visible");
        });
    });

    it("is expected to see sports article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]")
            .should("contain.text", "2022-01-23T12:02:56.125Z")
            .and("be.visible");
        });
    });
  });

  describe('can switch to "Economy" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "economyArticlesResponse.json",
      }).as("economyArticles");
      cy.get("[data-cy=economy-view]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@economyArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see economy article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]")
            .should("contain.text", "I Will Fear No Evil")
            .and("be.visible");
        });
    });

    it("is expected to see economy article teaser", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-teaser]")
            .should("contain.text", "Language designers want to design the perfect language. They...")
            .and("be.visible");
        });
    });

    it("is expected to see economy article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]")
            .should("contain.text", "2022-01-23T12:02:56.166Z")
            .and("be.visible");
        });
    });
  });

  describe('can switch back to "Main" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "economyArticlesResponse.json",
      });
      cy.intercept("GET", "/api/articles", {
        fixture: "articlesIndexResponse.json",
      }).as("getArticles");
      cy.get("[data-cy=economy-view]").click();
      cy.get("[data-cy=header]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@getArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]").should(
            "contain",
            "The Doors of Perception"
          );
        });
    });

    it("is expected to see article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]").should("contain", "2022-01-23T12:02:56.183Z");
        });
    });
  });
});

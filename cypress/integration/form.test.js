describe("My First Test", () => {
  it("performs test", () => {
    cy.visit("localhost:3000");
    cy.get("#order-pizza").click();
    cy.get("#name-input").type("name").should("have.value", "name");
    cy.get("#special-text").type("test").should("have.value", "test");
    cy.get("#extra-cheese").click().should("have.value", "on");
    cy.get("#pepperoni").click().should("have.value", "on");
    cy.get("#order-button").click();
  });
});

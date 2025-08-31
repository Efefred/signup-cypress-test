class BasePage {
  visit(path) {
    cy.visit(path);
  }

  getElement(selector) {
    return cy.get(selector);
  }

  clickElementContains(text) {
    cy.contains(text).click();
  }
}

export default BasePage;

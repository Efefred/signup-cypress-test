import BasePage from "./BasePage";

class SignUpPage extends BasePage {
  elements = {
    firstName: "#user\\[first_name\\]",
    lastName: "#user\\[last_name\\]",
    email: "#user\\[email\\]",
    password: "#user\\[password\\]",
    termsCheckbox: "label:contains('I have read and agree')",
    signUpButton: "button:contains('Sign up')",
    successProducts: "#main-content > div > h2",
    successCourses: "#category-name",
    errorMessage: "#notice > ul > li:nth-child(1)"
  };

  fillSignUpForm(user) {
    cy.get(this.elements.firstName).clear().type(user.firstName);
    cy.get(this.elements.lastName).clear().type(user.lastName);
    cy.get(this.elements.email).clear().type(user.email);
    if (user.password !== "") {
      cy.get(this.elements.password).clear().type(user.password);
    }
  }

  acceptTerms() {
    cy.contains("I have read and agree").click();
  }

  submitForm() {
    cy.contains("Sign up").click();
  }
}

export default new SignUpPage();

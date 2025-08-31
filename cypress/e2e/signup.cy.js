import SignUpPage from '../support/pages/SignUpPage.js'
import testData from "../fixtures/testData.json";

describe("Sign Up Page Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("HAPPY PATH: Successful sign up", () => {
    SignUpPage.fillSignUpForm(testData.validUser);
    SignUpPage.acceptTerms();
    SignUpPage.submitForm();

    cy.get(SignUpPage.elements.successProducts).should("contain.text", "Products");
    cy.get(SignUpPage.elements.successCourses).should("contain.text", "All Courses");
  });

  it("ERROR PATH: Blank Password", () => {
    SignUpPage.fillSignUpForm(testData.invalidUser);
    SignUpPage.acceptTerms();
    SignUpPage.submitForm();

    cy.get(SignUpPage.elements.errorMessage).should("contain.text", "Password can't be blank");
  });

  it("ERROR PATH: Terms not accepted", () => {
    SignUpPage.fillSignUpForm(testData.validUser);
    SignUpPage.submitForm();

    cy.get(SignUpPage.elements.errorMessage).should("contain.text", "Terms must be accepted");
  });
});

describe("Quotes app", () => {
    beforeEach(() => {
  
      cy.visit("http://localhost:3001/pizza");
    });

const nameInput = () => cy.get('input[name="name"]');
const sizeInput = () => cy.get('#size-dropdown');
const choiceInput = () => cy.get('input[name="choice"]');

const checkboxInput = () => cy.get('input[type="checkbox"]');
const specialInput = () => cy.get('#special-text');
// const submitBtn = () => cy.get('button[id="order-button"]');

it("Can type in the inputs", () => {
     nameInput()
        .should("have.value", "")
        .type("Seye Onigbinde")
        .should("have.value", "Seye Onigbinde");

        sizeInput()
        .select("small")
        .should("have.value", "small");

        choiceInput()
        .check("garlic_ranch");

        checkboxInput()
        .should("not.be.checked")
        .check(['topping1', 'topping3'])
        .should("be.checked");
   

        specialInput()
        .should("have.value", "")
        .type("Please deliver on time")
        .should("have.value", "Please deliver on time");


    });

});




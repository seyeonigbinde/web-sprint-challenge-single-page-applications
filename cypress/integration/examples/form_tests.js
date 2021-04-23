describe("Quotes app", () => {
    beforeEach(() => {
      // arbitrary code we want running before our tests run
      cy.visit("http://localhost:3001/pizza");
    });

const nameInput = () => cy.get('input[name="name"]');
const sizeInput = () => cy.get('input[name="size"]');
const choiceInput = () => cy.get('input[name="choice"]');
const specialInput = () => cy.get('input[name="special"]');


it("Can type in the inputs", () => {
     nameInput()
        .should("have.value", "")
        .type("Seye Onigbinde")
        .should("have.value", "Seye Onigbinde");

        sizeInput()
        .should("have.value", "")
        .type("small")
        .should("have.value", "small");

        choiceInput()
        .should("have.value", "")
        .type("seyeonigbinde@gmail.com")
        .should("have.value", "Garlic Ranch");

        specialInput()
        .should("have.value", "")
        .type("Nigeria")
        .should("have.value", "Nigeria");

  
    });


});




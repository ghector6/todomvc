Cypress.Commands.add("createDefaultTodos", () => {
    
    const TODO_ITEM_ONE = 'Buy Milk'

    const TODO_ITEM_TWO = 'Practice JavaScript'

    const TODO_ITEM_THREE = 'Get Files Done'

    Cypress.log({

        name: "create default todos",
        consoleProps() {
            return {
                "Inserted Todos": [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE]
            }
        }
    })

    cy.get(".new-todo")

        .type(`${TODO_ITEM_ONE}{enter}`)

        .type(`${TODO_ITEM_TWO}{enter}`)

        .type(`${TODO_ITEM_THREE}{enter}`)


})
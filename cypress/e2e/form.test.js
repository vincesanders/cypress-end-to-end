describe('form test', () => {
    it('test that the form component is working', () => {
        cy.visit('/');

        const user = {
            name: 'Vincent Sanders',
            email: 'a@b.com',
            motivation: 'Because I like to do stuff and things.',
            positions: '',
        }

        cy.get('[for="name"] > input')
        .type('Vincent Sanders')
        .should('have.value', 'Vincent Sanders');

        cy.get('[for="email"] > input')
        .type('a@b.com')
        .should('have.value', 'a@b.com');

        cy.get('button#submit')
        .should('be.disabled');

        cy.get('[for="terms"] > input')
        .click()
        .should('have.checked', true)

        cy.get('#positions')
        .select('Yard Work')
        .should('have.value', 'Yard Work');

        cy.get('textarea#motivation')
        .type(user.motivation)
        .should('have.value', user.motivation);

        cy.get('button#submit')
        .should('not.disabled');

        cy.get('[for="email"] > input')
        .clear()
        .type('bla bla bla')
        
        cy.get('[data-cy="email-error"]')
        .contains('Must be a valid email address.');


    })
})
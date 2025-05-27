describe('Set de Pruebas spec', () => {
  it('Busca una palabra', () => {
    cy.visit('https://duckduckgo.com/')
    cy.get('input[name="q"]').type('Cypress{enter}')
   // cy.get('[data-testid="result-title-a"]').should('contain', 'Cypress Documentation')
   cy.get('[data-testid="result-title-a"]').should('be.visible')
   cy.log('El elemento con data-testid="result-title-a" es visible')
   cy.contains('.eVNpHGjtxRBq_gLOfGDr.LQNqh2U1kzYxREs65IJu', 'Cypress Documentation').click()
  })
})

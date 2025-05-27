class HomePageActions {
    static removerProducto() {
      cy.get('.alert').click()
      cy.get('.dropdown > .btn-lg').click()
      cy.get('#header-cart > div > ul > li > table > tbody > tr > td:nth-child(5) > form > button').click()
    }

    static clickearCarrusel() {
        cy.log('Aca hacemos las acciones para agregar un producto al carrito')

    }
    static buscarProducto(producto) {
        cy.get('#search > input').type(producto)
        cy.get('#search > button').click()
    }
    static agregarAlCarrito() {
        cy.get('#button-cart').click()
    }
    static verificarMensajeExito(mensaje) {
    cy.get('#alert').should('be.visible').and('contain', mensaje)
}
    static revisarMenu() {
        cy.log('Aca hacemos las acciones para agregar un producto al carrito')

    }
    static verificarTituloHome() {
        cy.visit('https://winstoncastillo.com/robot-selenium/')
        cy.title().should('eq', 'Your Store')
    }
    static seleccionarProducto() {
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-fluid').should('be.visible')
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-fluid').click()
    }
    static scrollearHaciaAbajo() {
        cy.log('Aca scrolleamos hacia abajo')
        
    }
 
}

export default HomePageActions;
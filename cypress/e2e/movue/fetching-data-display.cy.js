/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Visiting home page of a website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.viewport(1920, 1080)
  })

  it('Carousel should show 20 play now movie', () => {
    cy.get('[data-cy=playnow-items]').should('have.length', 60)

    
  })
  
  it('Clicking carousel dot pagination should change page to clicked index', () => {
    cy.get('[data-cy=carousel-page-button]').eq(14).click()
    cy.get('[data-cy=carousel-page-indicator]').should('have.text', '14')
  })
})
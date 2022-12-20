import { getGreeting } from '../support/app.po';

describe('astro-crash', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.login('my-email@something.com', 'myPassword');

    getGreeting().contains('Welcome to Astro');
  });
});

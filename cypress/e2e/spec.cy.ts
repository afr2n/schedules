const DEFAULT_WAIT_TIME = 2000

describe('Schedule Filter', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1580, 720)
  })

  it('Has Loaded Schedule Page', () => {
    cy.visit('/')
    cy.wait(DEFAULT_WAIT_TIME)
    const titleElement = cy.get('h1').first()
    titleElement.should('include.text', 'Schedules')
  })

  it("Display elements before filter applied", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="retire-filter"]').should('exist');
    cy.get('[data-testid="entries-filter"]').should('exist');
    cy.get('[data-testid="log-entry-table"]').should('exist');
    cy.get('[data-testid="schedule-card"]').should('have.length', 10);
    cy.get('[data-testid="schedule-log-entry"]').should('have.length', 11);
  });

  it("On change of schedule card, the table log entries update", () => {
    cy.get('[data-testid="schedule-card"]').eq(1).click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="schedule-log-entry"]').should('have.length', 3);
  });
  
  it("Filter for Retired card should return no cards as all are unretired at this point", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="retire-filter"]').click();
    cy.get('[data-testid="retire-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Retired')
    .click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="schedule-card"]').should('have.length', 0);
  });

  it("Retire last 3 schedule cards and filter for Retired cards should return 3", () => {
    cy.get('[data-testid="schedule-card"]:last-child')
    .then(($lastCard) => {
      // Get the index of the last card
      const lastIndex = $lastCard.index();
      // Select the last three cards by using their index
      const lastThreeCards = Array.from({ length: 3 }, (_, index) => lastIndex - index);
      // Iterate over the selected cards and find the retire button within each
      lastThreeCards.forEach((index) => {
        cy.get(`[data-testid="schedule-card"]:eq(${index}) [data-testid="retire"]`).click();
      });
    });
    cy.get('[data-testid="retire-filter"]').click();
    cy.get('[data-testid="retire-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Retired')
    .click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="schedule-card"]').should('have.length', 3);
  });

  it("Filter for unRetired cards should result in 7 ", () => {
    cy.get('[data-testid="retire-filter"]').click();
    cy.get('[data-testid="retire-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Unretired')
    .click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="schedule-card"]').should('have.length', 7);
  });

  it("Reset all cards to unretired once again ", () => {
    cy.get('[data-testid="schedule-card"]:last-child')
    .then(($lastCard) => {
      // Get the index of the last card
      const lastIndex = $lastCard.index();
      // Select the last three cards by using their index
      const lastThreeCards = Array.from({ length: 3 }, (_, index) => lastIndex - index);
      // Iterate over the selected cards and find the retire button within each
      lastThreeCards.forEach((index) => {
        cy.get(`[data-testid="schedule-card"]:eq(${index}) [data-testid="retire"]`).click();
      });
    });
    cy.get('[data-testid="retire-filter"]').click();
    cy.get('[data-testid="retire-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Retired')
    .click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="schedule-card"]').should('have.length', 0);
  });
  
  
  it("Changing entries filter updates the log entries table columns and On change of schedule card, persists the entries filter applied followed by clear select displays all table cols", () => {
    cy.get('[data-testid="table-col"]').should('have.length', 8);

    cy.get('[data-testid="entries-filter"]').click();
    cy.get('[data-testid="entries-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Date')
    .click();

    cy.get('[data-testid="entries-filter"]').click();
    cy.get('[data-testid="entries-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Time')
    .click();

    cy.get('[data-testid="entries-filter"]').click();
    cy.get('[data-testid="entries-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Activity')
    .click();

    cy.get('[data-testid="entries-filter"]').click();
    cy.get('[data-testid="entries-filter"]')
    .find('.select__menu-list')
    .contains('.select__option', 'Presenters')
    .click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="table-col"]').should('have.length', 4);

    cy.get('[data-testid="schedule-card"]').eq(2).click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="schedule-log-entry"]').should('have.length', 3);
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="table-col"]').should('have.length', 4);
    
    cy.get('[data-testid="entries-filter"]').find('div[class*="clear-indicator"]').click();
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('[data-testid="table-col"]').should('have.length', 8);
  });
})

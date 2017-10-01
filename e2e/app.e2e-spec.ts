import { NgMyPortfolioExtendedPage } from './app.po';

describe('ng-my-portfolio-extended App', () => {
  let page: NgMyPortfolioExtendedPage;

  beforeEach(() => {
    page = new NgMyPortfolioExtendedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

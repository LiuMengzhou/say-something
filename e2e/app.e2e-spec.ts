import { SaySomethingPage } from './app.po';

describe('say-something App', () => {
  let page: SaySomethingPage;

  beforeEach(() => {
    page = new SaySomethingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

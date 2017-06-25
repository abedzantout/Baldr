import { BaldrPage } from './app.po';

describe('baldr App', () => {
  let page: BaldrPage;

  beforeEach(() => {
    page = new BaldrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

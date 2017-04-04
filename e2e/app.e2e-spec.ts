import { GetJsonPage } from './app.po';

describe('get-json App', () => {
  let page: GetJsonPage;

  beforeEach(() => {
    page = new GetJsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

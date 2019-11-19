import { Deployee11Page } from './app.po';

describe('deployee11 App', function() {
  let page: Deployee11Page;

  beforeEach(() => {
    page = new Deployee11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

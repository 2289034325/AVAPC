import { AVAPCPage } from './app.po';

describe('avapc App', function() {
  let page: AVAPCPage;

  beforeEach(() => {
    page = new AVAPCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AppsbrewappPage } from './app.po';

describe('appsbrewapp App', () => {
  let page: AppsbrewappPage;

  beforeEach(() => {
    page = new AppsbrewappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

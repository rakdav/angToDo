import { AngToDoPage } from './app.po';

describe('ang-to-do App', () => {
  let page: AngToDoPage;

  beforeEach(() => {
    page = new AngToDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

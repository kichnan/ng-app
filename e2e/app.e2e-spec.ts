import { AppJunPage } from './app.po';

describe('app-jun App', () => {
  let page: AppJunPage;

  beforeEach(() => {
    page = new AppJunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

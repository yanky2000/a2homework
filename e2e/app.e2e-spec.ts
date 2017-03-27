import { A2homeworkPage } from './app.po';

describe('a2homework App', () => {
  let page: A2homeworkPage;

  beforeEach(() => {
    page = new A2homeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

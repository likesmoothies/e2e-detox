describe('App Launch', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: false });
  });

  it('logo image should appear on splash screen', async () => {
    await expect(element(by.id('logoImage'))).toBeVisible();
    await expect(element(by.id('loadingIndicator'))).toBeVisible();
  });

  it('loading indicator should appear on splash screen', async () => {
    await expect(element(by.id('loadingIndicator'))).toBeVisible();
  });

});

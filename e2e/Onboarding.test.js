const { device, expect, element, by } = require('detox');

describe('Onboarding Process', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(5000);
  });

  it('should display the first slide and navigate to next slide', async () => {
    await expect(
      element(by.text('Grab all events now only in your hands')),
    ).toBeVisible();
    await element(by.text('Next')).tap();
    await expect(
      element(by.text('Easy payment & fast event ticket')),
    ).toBeVisible();
  });

  it('should navigate to login screen on third slide', async () => {
    await element(by.id('OnboardingScreen')).takeScreenshot();
    await element(by.text('Next')).tap();
    await element(by.text('Login')).tap();
    await expect(element(by.id('LoginScreen'))).toBeVisible();
  });

  it('should navigate the slide with swipe gesture to next and previous slide', async () => {
     await device.launchApp({ newInstance: true });
     await waitFor(element(by.id('OnboardingScreen')))
          .toBeVisible()
          .withTimeout(5000);
    await element(by.id('OnboardingScreen')).swipe('left');
    await expect(
          element(by.text('Easy payment & fast event ticket')),
        ).toBeVisible();
    await element(by.id('OnboardingScreen')).swipe('right');
    await expect(
          element(by.text('Grab all events now only in your hands')),
        ).toBeVisible();
  });

  it('should navigate the slide with swipe gesture untul login screen', async () => {
//      await device.reloadReactNative({ newInstance: false });
//      await waitFor(element(by.id('OnboardingScreen')))
//                .toBeVisible()
//                .withTimeout(5000);
      await element(by.id('OnboardingScreen')).swipe('left');
      await expect(
                element(by.text('Easy payment & fast event ticket')),
              ).toBeVisible();
      await element(by.id('OnboardingScreen')).swipe('left','fast');
      // Debugging: Log a message before waiting for the login button
      console.log("Waiting for the Login button to be visible...");
      try {
          await waitFor(element(by.text('Login'))).toBeVisible().withTimeout(5000);
          console.log("Login button is visible!");
      } catch (error) {
          console.error("Error waiting for Login button:", error);
          throw error; // Re-throw the error to fail the test
      }
      await element(by.text('Login')).tap();
      await waitFor(element(by.id('LoginScreen'))).toBeVisible().withTimeout(5000)
  });
});
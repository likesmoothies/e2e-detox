const { device, expect, element, by } = require('detox');

describe('Login Screen', () => {
   beforeEach(async () => {
      await device.launchApp({ newInstance: true });
      await waitFor(element(by.id('OnboardingScreen')))
        .toBeVisible()
        .withTimeout(5000);
      await element(by.text('Next')).tap();
      await element(by.text('Next')).tap();
      await element(by.text('Login')).tap();
    });
//
//    beforeEach(async () => {
//      await device.reloadReactNative({ newInstance: true });
//      await element(by.text('Next')).tap();
//      await element(by.text('Next')).tap();
//      await element(by.text('Login')).tap();
//    })
   it('Able to back to Onboarding Screen', async () => {
      await device.pressBack();
      await waitFor(element(by.id('OnboardingScreen')))
            .toBeVisible()
            .withTimeout(5000);
     });

  it('Error Messages should be appear if both of fields are empty', async () => {
      await element(by.id('Login')).tap();
      await expect(element(by.text('Please enter your email'))).toBeVisible();
      await expect(element(by.text('Enter your password'))).toBeVisible();
    });

  it('Password Error Message should be appear if password is empty', async () => {
    await element(by.id('email')).typeText('andi@mercari.com');
    await device.pressBack();
    await element(by.id('Login')).tap();
    await expect(element(by.text('Enter your password'))).toBeVisible();
  });

  it('Email Error Message should be appear if email is empty', async () => {
      await element(by.id('password')).typeText('pass');
      await device.pressBack();
      await element(by.id('Login')).tap();
      await expect(element(by.text('Please enter your email'))).toBeVisible();
  });

  it('Email valid error Message should be appear if email is invalid', async () => {
      await element(by.id('email')).typeText('andi@mercari');
      await element(by.id('password')).typeText('pass');
      await device.pressBack();
      await element(by.id('Login')).tap();
      await expect(element(by.text('Please enter a valid email'))).toBeVisible();
  });

  it('Success Login with valid email and password', async () => {
      await element(by.id('email')).typeText('andi@mercari.com');
      await element(by.id('password')).typeText('pass');
      await device.pressBack();
      await element(by.id('Login')).tap();
      await expect(element(by.text('Testing Complete'))).toBeVisible();
  });
});
const { device, expect, element, by } = require('detox');

describe('Login Screen', () => {
   beforeAll(async () => {
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
   it('should display all UI elements', async () => {
      const elementIds = ['email', 'password', 'Login'];
        for (const id of elementIds) {
           await expect(element(by.id(id))).toBeVisible();
        }
   });

  it('Error Messages should be appear if both of fields are empty', async () => {
      await element(by.id('Login')).tap();
      await expect(element(by.text('Please enter your email'))).toBeVisible();
      await expect(element(by.text('Enter your password'))).toBeVisible();
    });

  it('Able to back to Onboarding Screen', async () => {
      await device.pressBack();
      await waitFor(element(by.id('OnboardingScreen'))).toBeVisible()
            .withTimeout(5000);
  });

  it('Password Error Message should be appear if password is empty', async () => {
    await element(by.text('Login')).tap();
    await element(by.id('email')).typeText('andi@mercari.com');
    await device.pressBack();
    await element(by.id('Login')).tap();
    await expect(element(by.text('Enter your password'))).toBeVisible();
  });

  it('Email Error Message should be appear if email is empty', async () => {
      await element(by.id('password')).typeText('pass');
      await element(by.id('email')).clearText();
      await device.pressBack();
      await element(by.id('Login')).tap();
      await expect(element(by.text('Please enter your email'))).toBeVisible();
  });

  it('Email valid error Message should be appear if email is invalid', async () => {
      await element(by.id('email')).typeText('andi@mercari');
      await device.pressBack();
      await element(by.id('Login')).tap();
      await expect(element(by.text('Please enter a valid email'))).toBeVisible();
  });

  it('Success Login with valid email and password', async () => {
      await element(by.id('email')).clearText();
      await element(by.id('email')).typeText('andi@mercari.com');
      await device.pressBack();
      await element(by.id('Login')).tap();
      await expect(element(by.text('Testing Complete'))).toBeVisible();
  });

  it('Failed cases to show the artifacts', async () => {
        await device.pressBack();
        await element(by.id('Login')).tap();
        await expect(element(by.text('Testing Completeaa'))).toBeVisible();
    });

});
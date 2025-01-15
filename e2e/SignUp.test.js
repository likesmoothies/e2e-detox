const { device, expect, element, by } = require('detox');

describe('Signup Screen', () => {
   beforeAll(async () => {
      await device.launchApp({ newInstance: true });
      await waitFor(element(by.id('onboardingScreen')))
        .toBeVisible()
        .withTimeout(5000);
      await element(by.text('Next')).tap();
      await element(by.text('Next')).tap();
      await element(by.text('Sign up')).tap();
   });

   it('should display all UI elements', async () => {
      const elementIds = ['firstNameInput', 'lastNameInput', 'email', 'password', 'signUpButton'];
       for (const id of elementIds) {
          await expect(element(by.id(id))).toBeVisible();
       }
     await expect(element(by.text('Already have an account? Login In'))).toBeVisible();
   });

   it('should show all relevant error messages when all fields are empty', async () => {
        await element(by.id('signUpButton')).tap();
        await expect(element(by.text('Please enter your first name'))).toBeVisible();
        await expect(element(by.text('Enter your last name'))).toBeVisible();
        await expect(element(by.text('Please enter your email'))).toBeVisible();
        await expect(element(by.text('Enter your password'))).toBeVisible();
   });

    it('Able to back to Onboarding Screen from sign up screen', async () => {
       await device.pressBack();
       await waitFor(element(by.id('onboardingScreen')))
            .toBeVisible()
            .withTimeout(5000);
    });

   it('should display error for empty first name', async () => {
       await element(by.text('Sign up')).tap();
       await element(by.id('email')).typeText('andi@mercari.com');
       await element(by.id('lastNameInput')).typeText('Mercari');
       await element(by.id('password')).typeText('123456');
       await device.pressBack();
       await element(by.id('signUpButton')).tap();
       await expect(element(by.text('Please enter your first name'))).toBeVisible();
   });

   it('should display error for empty last name', async () => {
       await element(by.id('firstNameInput')).typeText('Andi');
       await element(by.id('lastNameInput')).clearText();
       await device.pressBack();
       await element(by.id('signUpButton')).tap();
       await expect(element(by.text('Enter your last name'))).toBeVisible();
   });

   it('should display error for invalid email format', async () => {
     await element(by.id('email')).clearText();
     await element(by.id('lastNameInput')).typeText('Mercari');
     await element(by.id('email')).typeText('andimercari');
     await device.pressBack();
     await element(by.id('signUpButton')).tap();
     await expect(element(by.text('Please enter a valid email'))).toBeVisible();
   });

   it('should display error for empty password', async () => {
     await element(by.id('email')).clearText();
     await element(by.id('password')).clearText();
     await element(by.id('email')).typeText('andi@mercari.com');
     await device.pressBack();
     await element(by.id('signUpButton')).tap();
     await expect(element(by.text('Enter your password'))).toBeVisible();
   });

   it('should successfully register with valid inputs', async () => {
     await element(by.id('password')).typeText('123456');
     await device.pressBack();
     await element(by.id('signUpButton')).tap();
     await expect(element(by.text('Testing Complete'))).toBeVisible();
   });

});
import { expect, describe, it } from 'vitest';
import { signUpSchema } from '../schema/signuUpSchema';
describe('SignUp Validation Schema', () => {
  it('should validate with correct input', async () => {
    const validData = {
      email: 'test@example.com',
      password: 'Test@123',
      confirmPassword: 'Test@123',
    };

    await expect(signUpSchema.isValid(validData)).resolves.toBe(true);
  });

  it('should not validate with incorrect email format', async () => {
    const invalidEmailData = {
      email: 'invalidemail',
      password: 'Test@123',
      confirmPassword: 'Test@123',
    };

    await expect(signUpSchema.isValid(invalidEmailData)).resolves.toBe(false);
  });

  it('should not validate with weak password', async () => {
    const weakPasswordData = {
      email: 'test@example.com',
      password: 'weakpassword',
      confirmPassword: 'weakpassword',
    };

    await expect(signUpSchema.isValid(weakPasswordData)).resolves.toBe(false);
  });

  it('should not validate when password and confirm password do not match', async () => {
    const mismatchPasswordData = {
      email: 'test@example.com',
      password: 'Test@123',
      confirmPassword: 'MismatchPassword',
    };

    await expect(signUpSchema.isValid(mismatchPasswordData)).resolves.toBe(
      false
    );
  });
});

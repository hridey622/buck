import { z } from 'zod';

// Registration schema
const registrationSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters long')
    .max(50, 'First name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s-]+$/, 'First name can only contain letters, spaces, and hyphens'),

  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters long')
    .max(50, 'Last name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s-]+$/, 'Last name can only contain letters, spaces, and hyphens'),

  email: z.string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters long')
    .max(255, 'Email cannot exceed 255 characters'),

  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(72, 'Password cannot exceed 72 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
});

// Login schema
const loginSchema = z.object({
  email: z.string()
    .email('Invalid email address'),

  password: z.string()
    .min(1, 'Password is required')
});

// Validation functions
export const validateRegistration = (data) => {
  try {
    const result = registrationSchema.safeParse(data);
    if (!result.success) {
      return {
        error: {
          details: [{ message: result.error.errors[0].message }]
        }
      };
    }
    return { error: null };
  } catch (error) {
    return {
      error: {
        details: [{ message: 'Invalid input data' }]
      }
    };
  }
};

export const validateLogin = (data) => {
  try {
    const result = loginSchema.safeParse(data);
    if (!result.success) {
      return {
        error: {
          details: [{ message: result.error.errors[0].message }]
        }
      };
    }
    return { error: null };
  } catch (error) {
    return {
      error: {
        details: [{ message: 'Invalid input data' }]
      }
    };
  }
};
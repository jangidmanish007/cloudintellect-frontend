/**
 * Contact Form Service
 * Handles contact form submissions to the backend API
 */

import { clientApi } from '@/_utils/clientApi';

/**
 * Submit contact form data
 * @param {Object} data - Form data
 * @param {string} data.fullName - Full name
 * @param {string} data.phoneNumber - Phone number
 * @param {string} data.email - Email address
 * @param {string} data.program - Selected program (SFDC/SFMC)
 * @param {string} data.message - Message
 * @param {boolean} data.consent - Consent checkbox
 * @returns {Promise<Object>} Response object
 */
export const submitContactForm = async (data) => {
  try {
    const result = await clientApi(process.env.CONTACT_FORM_SUBMIT, {
      method: 'POST',
      body: data,
    });

    if (!result.status) {
      throw new Error(result.message || 'Failed to submit form. Please try again.');
    }

    return {
      status: true,
      message: result.message || 'Form submitted successfully!',
      data: result.result || null,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      status: false,
      message: error.message || 'Network error. Please check your connection and try again.',
      data: null,
    };
  }
};

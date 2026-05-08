/**
 * Contact Form Service
 * Handles contact form submissions to the backend API
 */

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
    const apiUrl = `${process.env.API_BASE_URL}${process.env.CONTACT_FORM_SUBMIT}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      throw new Error(result.message || 'Failed to submit form. Please try again.');
    }

    return {
      status: true,
      message: result.message || 'Form submitted successfully!',
      data: result.data || null,
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

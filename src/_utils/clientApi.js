/**
 * Client-side API utility
 * Uses Next.js rewrites proxy to avoid CORS issues
 * Configured in next.config.mjs
 */

export async function clientApi(endpoint, options = {}) {
  try {
    const { method = 'GET', body = null } = options;

    // Remove leading slash if present
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

    // Use the proxy path configured in next.config.mjs
    const url = `/api-proxy/${cleanEndpoint}`;

    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Add body for POST/PUT/PATCH requests
    if (body && ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, fetchOptions);
    const data = await response.json();

    // Normalize response format
    if (data?.success) {
      return {
        status: true,
        result: data.data || data.result || null,
        message: data.message || null,
      };
    } else {
      return {
        status: false,
        result: null,
        message: data.message || 'Request failed',
      };
    }
  } catch (error) {
    console.error('[clientApi] Error:', error);
    return {
      status: false,
      result: null,
      message: error.message || 'Network error',
    };
  }
}

import Axios from 'axios';
import Cookies from 'js-cookie';

// ─── Server-side fetch (Next.js Server Components) ────────────────────────────
// Uses native fetch — safe on the server (no Axios / js-cookie / location).
export async function serverFetch(path) {
  const base = process.env.API_BASE_URL;
  try {
    const res = await fetch(`${base}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
    });
    const json = await res.json();
    if (json?.success) {
      return { status: true, result: json.data, message: json.message };
    }
    return { status: false, result: null, message: json.message };
  } catch (err) {
    console.error('[serverFetch] error:', err.message);
    return { status: false, result: null, message: err.message };
  }
}

function AuthHeader() {
  const _headers = {
    headers: {
      'Content-Type': 'application/json'
    },
  };

  if (Cookies.get('_token')) {
    _headers['headers']['Authorization'] = `Bearer ${Cookies.get('_token')}`;
  } else {
    const encodedAuth = Buffer.from('cloud' + ":" + 'cloud@123!!').toString('base64');
    _headers['headers']['Authorization'] = `Basic ${encodedAuth}`;
  }
  return _headers;
}


export function mutipartHeader() {
  const _headers = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  if (Cookies.get('_token')) {
    _headers['headers']['Authorization'] = `Bearer ${Cookies.get('_token')}`;
  }
  return _headers;
}

// fetch data by axios method
export async function fetcher(method, url, params = null) {
  try {
    let response;
    let headers = AuthHeader();
    if (method == 'GET') {
      if (params) {
        headers = { ...headers, params: params };
      }
      response = await Axios.get(`${process.env.API_BASE_URL}${url}`, headers);
    } else {
      response = await Axios.post(`${process.env.API_BASE_URL}${url}`, params, headers);
    }
    if (response.status == 200) {
      return successResponse(response?.data);
    } else {
      return errorResponse(response);
    }
  } catch (err) {
    if (err?.response?.status == 500) {
      location.href = "/server-error";
    }
    else if (err?.response?.status == 401) {
      Cookies.remove('_token', { path: '/' });
      Cookies.remove('_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    }
    return errorResponse({ resultMessage: err });
  }
}

// fetch data via fetch
export async function fetchAPI(url, options = null) {
  try {
    let response;
    let headers = AuthHeader();
    if (options) {
      headers = { ...headers, ...options };
    }
    response = await fetch(`${process.env.API_BASE_URL}${url}`, headers);
    const jsonResponse = await response.json();

    // Check if the HTTP response was successful (status 200-299)
    if (response.ok) {
      return successResponse(jsonResponse);
    } else {
      return errorResponse(jsonResponse);
    }
  } catch (err) {
    if (err?.response?.status == 500) {
      location.href = "/server-error";
    }
    else if (err?.response?.status == 401) {
      Cookies.remove('_token', { path: '/' });
      Cookies.remove('_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    }
    return errorResponse({ message: err.message });
  }
}

function successResponse(response) {
  // Handle response format: {success: true, data: [...]}
  if (response?.success && response?.data !== undefined) {
    return {
      status: true,
      result: response.data,
      message: response.message || null,
    };
  }
  // Handle response format: {result: [...], message: '...'}
  else if (response?.result !== undefined) {
    return {
      status: true,
      result: response.result,
      message: response.message || null,
    };
  }
  // Fallback: return the response as-is wrapped in status
  else {
    return {
      status: true,
      result: response,
      message: response?.message || null,
    };
  }
}

function errorResponse(response) {
  return {
    status: false,
    result: null,
    message: response?.message || response?.resultMessage || 'An error occurred',
  };
}

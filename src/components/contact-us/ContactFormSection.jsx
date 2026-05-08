'use client';

import { ChevronDown, Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { validEmail, validFullName, validIndianPhone } from '@/_helper/Regex';

const PROGRAMS = ['SFDC', 'SFMC'];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    program: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    program: '',
    message: '',
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  // Real-time validation when buttonClicked is true
  useEffect(() => {
    if (buttonClicked) {
      formValidation();
    }
  }, [formData.fullName, formData.email, formData.phoneNumber, formData.program, formData.message, buttonClicked]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formValidation = () => {
    let fullNameMsg = '';
    let emailMsg = '';
    let phoneNumberMsg = '';
    let programMsg = '';
    let messageMsg = '';
    let isValid = false;

    // Full Name validation
    if (!formData.fullName.trim()) {
      fullNameMsg = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      fullNameMsg = 'Full name must be at least 2 characters';
    } else if (formData.fullName.length > 100) {
      fullNameMsg = 'Full name is too long';
    } else if (!validFullName(formData.fullName)) {
      fullNameMsg = 'Please enter a valid full name (letters and spaces only)';
    }

    // Email validation
    if (!formData.email.trim()) {
      emailMsg = 'Email is required';
    } else if (!validEmail(formData.email)) {
      emailMsg = 'Please enter a valid email address';
    }

    // Phone Number validation
    if (!formData.phoneNumber.trim()) {
      phoneNumberMsg = 'Phone number is required';
    } else if (formData.phoneNumber.length !== 10) {
      phoneNumberMsg = 'Phone number must be exactly 10 digits';
    } else if (!validIndianPhone(formData.phoneNumber)) {
      phoneNumberMsg = 'Please enter a valid Indian phone number';
    }

    // Program validation
    if (!formData.program) {
      programMsg = 'Please select a program';
    }

    // Message validation
    if (!formData.message.trim()) {
      messageMsg = 'Message is required';
    } else if (formData.message.length < 10) {
      messageMsg = 'Message must be at least 10 characters';
    } else if (formData.message.length > 1000) {
      messageMsg = 'Message is too long';
    }

    if (!fullNameMsg && !emailMsg && !phoneNumberMsg && !programMsg && !messageMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(false);
      setErrorMessage({
        fullName: '',
        email: '',
        phoneNumber: '',
        program: '',
        message: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        fullName: fullNameMsg,
        email: emailMsg,
        phoneNumber: phoneNumberMsg,
        program: programMsg,
        message: messageMsg,
      });
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Set button clicked to true to enable validation
    if (!buttonClicked) {
      setButtonClicked(true);
    }

    // Validate form
    if (!formValidation()) {
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const params = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        program: formData.program,
        message: formData.message,
        source: 'contact-page',
        consent: true,
      };

      // Use the API base URL from environment
      const apiUrl = `${process.env.API_BASE_URL}${process.env.CONTACT_FORM_SUBMIT}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Failed to submit form. Please try again.');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you! We will get back to you within 24 hours.');

      // Reset form after 3 seconds
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      program: '',
      message: '',
    });
    setError(false);
    setErrorMessage({
      fullName: '',
      email: '',
      phoneNumber: '',
      program: '',
      message: '',
    });
    setButtonClicked(false);
    setSubmitStatus(null);
    setSubmitMessage('');
  };

  return (
    <section className="min-h-screen flex items-start justify-center py-12">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 px-4">
        <div className="flex-1 bg-white rounded-2xl border border-[#0000001A] p-6 md:p-10 h-fit">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Send us a message</h2>
          <p className="text-sm md:text-base text-black mb-6 font-light">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={`flex-1 w-full border rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none ${
                    errorMessage.fullName ? 'border-red-500' : 'border-[#00000040]'
                  }`}
                />
                {errorMessage.fullName && <p className="text-xs text-red-500 mt-1">{errorMessage.fullName}</p>}
              </div>
              <div>
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  maxLength={10}
                  className={`flex-1 w-full border rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none ${
                    errorMessage.phoneNumber ? 'border-red-500' : 'border-[#00000040]'
                  }`}
                />
                {errorMessage.phoneNumber && <p className="text-xs text-red-500 mt-1">{errorMessage.phoneNumber}</p>}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className={`w-full border rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none ${
                  errorMessage.email ? 'border-red-500' : 'border-[#00000040]'
                }`}
              />
              {errorMessage.email && <p className="text-xs text-red-500 mt-1">{errorMessage.email}</p>}
            </div>

            <div>
              <div className="relative text-xs text-[#000000BF]">
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className={`w-full border rounded-md px-4 py-3 text-xs text-[#000000BF] bg-white appearance-none outline-none cursor-pointer ${
                    errorMessage.program ? 'border-red-500' : 'border-[#00000040]'
                  }`}
                >
                  <option value="">Select Program</option>
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#000000BF] pointer-events-none"
                />
              </div>
              {errorMessage.program && <p className="text-xs text-red-500 mt-1">{errorMessage.program}</p>}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className={`w-full border rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none resize-none ${
                  errorMessage.message ? 'border-red-500' : 'border-[#00000040]'
                }`}
              />
              {errorMessage.message && <p className="text-xs text-red-500 mt-1">{errorMessage.message}</p>}
            </div>

            <div className="text-xs text-[#000000BF] py-2">
              By submitting this form, I agree to receive notifications from the Cloud Intellect in the form of
              SMS/E-mail/Call.
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="flex items-start gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-green-700">{submitMessage}</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{submitMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="cursor-pointer w-full bg-[#009DE3] hover:bg-[#0B9DD6] text-white text-xs font-bold tracking-widest uppercase p-3 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  SUBMITTING...
                </>
              ) : (
                'APPLY NOW'
              )}
            </button>
          </form>
        </div>

        <div className="w-full lg:w-100 flex flex-col gap-4">
          <div className="bg-[#0B1C33] rounded-md p-6 md:p-10 text-white flex flex-col md:gap-3 gap-2">
            <h3 className="text-md font-bold mb-2">Contact Information</h3>
            <a
              href="tel:+918768996944"
              className="flex items-center gap-3 bg-[#1a2d42] hover:bg-[#1f3550] transition-colors rounded-xl px-4 py-3 mb-2.5 group"
            >
              <div className="shrink-0 w-8 h-8 bg-[#22C55E33] rounded-full flex items-center justify-center">
                <Phone size={14} className="text-[#4ADE80]" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="ranade-font text-sm font-semibold leading-tight">+91 876-899-6944</p>
                <p className="ranade-font text-xs text-[#FFFFFFBF]">Call Us</p>
              </div>
            </a>
            <a
              href="tel:+919860183175"
              className="flex items-center gap-3 bg-[#1a2d42] hover:bg-[#1f3550] transition-colors rounded-xl px-4 py-3 mb-2.5 group"
            >
              <div className="shrink-0 w-8 h-8 bg-[#22C55E33] rounded-full flex items-center justify-center">
                <Phone size={14} className="text-[#4ADE80]" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="ranade-font text-sm font-semibold leading-tight">+91 986-018-3175</p>
                <p className="ranade-font text-xs text-[#FFFFFFBF]">Call Us</p>
              </div>
            </a>
            <a
              href="mailto:info@cloudintellect.in"
              className="flex items-center gap-3 bg-[#1a2d42] hover:bg-[#1f3550] transition-colors rounded-xl px-4 py-3 mb-4 group"
            >
              <div className="shrink-0 w-8 h-8 bg-[#22C55E33] rounded-full flex items-center justify-center">
                <Mail size={14} className="text-[#4ADE80]" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="ranade-font text-sm font-semibold leading-tight">info@cloudintellect.in</p>
                <p className="ranade-font text-xs text-[#FFFFFFBF]">Email Us</p>
              </div>
            </a>
            <div className="rounded-xl overflow-hidden h-36 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613!2d73.7674!3d18.5594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzM0LjAiTiA3M8KwNDYnMDIuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 bg-[#009FFF1A] rounded-md flex items-center justify-center">
              <MapPin size={20} className="text-blue-500" />
            </div>
            <div>
              <h4 className="text-md font-bold text-black mb-1">Pune</h4>
              <p className="ranade-font text-xs md:text-sm text-black leading-relaxed mb-1.5">
                3rd floor block 306, Baner Biz Bay, Laxman Nagar, Baner, Pune, Maharashtra 411045
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ranade-font text-xs md:text-sm font-semibold text-[#009DE3] hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 bg-[#009FFF1A] rounded-md flex items-center justify-center">
              <MapPin size={20} className="text-blue-500" />
            </div>
            <div>
              <h4 className="text-md font-bold text-black mb-1">Nagpur</h4>
              <p className="ranade-font text-xs md:text-sm text-black leading-relaxed mb-1.5">
                Cloud Intellect, Plot no. 8, Sanjay Heights, Beltarodi Rd, near ICICI Bank, Besa, Nagpur, Maharashtra
                440037
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ranade-font text-xs md:text-sm font-semibold text-[#009DE3] hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

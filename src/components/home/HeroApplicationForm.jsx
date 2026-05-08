'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { validEmail, validFullName, validIndianPhone } from '@/_helper/Regex';

// ── Shared styles ─────────────────────────────────────────────────────────────
const triggerCls = 'form-field flex items-center justify-between outline-0';

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-[10px] text-red-500 mt-0.5 leading-tight">{message}</p>;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function HeroApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: undefined,
    city: '',
    product: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    product: '',
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  // Real-time validation when buttonClicked is true
  useEffect(() => {
    if (buttonClicked) {
      formValidation();
    }
  }, [
    formData.name,
    formData.email,
    formData.phone,
    formData.dateOfBirth,
    formData.city,
    formData.product,
    buttonClicked,
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date,
    }));
    setCalendarOpen(false);
  };

  const formValidation = () => {
    let nameMsg = '';
    let emailMsg = '';
    let phoneMsg = '';
    let dateOfBirthMsg = '';
    let cityMsg = '';
    let productMsg = '';
    let isValid = false;

    // Name validation
    if (!formData.name.trim()) {
      nameMsg = 'Name is required';
    } else if (formData.name.length < 2) {
      nameMsg = 'Name must be at least 2 characters';
    } else if (formData.name.length > 60) {
      nameMsg = 'Name is too long';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      nameMsg = 'Name can only contain letters';
    }

    // Email validation
    if (!formData.email.trim()) {
      emailMsg = 'Email is required';
    } else if (!validEmail(formData.email)) {
      emailMsg = 'Enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      phoneMsg = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      phoneMsg = 'Enter a valid 10-digit Indian mobile number';
    }

    // Date of Birth validation
    if (!formData.dateOfBirth) {
      dateOfBirthMsg = 'Please select your date of birth';
    }

    // City validation
    if (!formData.city.trim()) {
      cityMsg = 'City is required';
    } else if (formData.city.length < 2) {
      cityMsg = 'City must be at least 2 characters';
    } else if (formData.city.length > 50) {
      cityMsg = 'City is too long';
    }

    // Product validation
    if (!formData.product) {
      productMsg = 'Please select a course';
    }

    if (!nameMsg && !emailMsg && !phoneMsg && !dateOfBirthMsg && !cityMsg && !productMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(false);
      setErrorMessage({
        name: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        city: '',
        product: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        email: emailMsg,
        phone: phoneMsg,
        dateOfBirth: dateOfBirthMsg,
        city: cityMsg,
        product: productMsg,
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

    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const params = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        dateOfBirth: format(formData.dateOfBirth, 'yyyy-MM-dd'),
        city: formData.city.trim(),
        product: formData.product,
      };

      // Use the API base URL from environment
      const apiUrl = `${process.env.API_BASE_URL}${process.env.HERO_APPLICATION_SUBMIT}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Failed to submit application. Please try again.');
      }

      resetForm();
      setSubmitStatus('success');
    } catch (err) {
      setSubmitStatus(err.message || 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      dateOfBirth: undefined,
      city: '',
      product: '',
    });
    setError(false);
    setErrorMessage({
      name: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      city: '',
      product: '',
    });
    setButtonClicked(false);
    setSubmitStatus(null);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl px-6 py-6">
      {/* Header */}
      <div className="text-center mb-4">
        <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">APPLY TODAY FOR</p>
        <h2 className="text-gray-900 font-medium text-[28px] leading-tight mb-3">Salesforce Training Institute</h2>
        <div className="bg-[#009DE3] text-white text-xs font-medium text-center py-2.5 px-3 rounded-sm">
          Start your learning with a free orientation session
        </div>
      </div>

      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 mt-4">
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Student Name"
              className="form-field"
              aria-invalid={!!errorMessage.name}
            />
            <FieldError message={errorMessage.name} />
          </div>
          <div>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="E Mail"
              className="form-field"
              aria-invalid={!!errorMessage.email}
            />
            <FieldError message={errorMessage.email} />
          </div>
        </div>

        {/* Row 2: Phone with +91 prefix */}
        <div>
          <div className="form-field flex p-0 overflow-hidden focus-within:border-[#009DE3] focus-within:ring-2 focus-within:ring-[#009DE3]/20 transition">
            <span className="flex items-center px-3 text-sm text-gray-500 border-r border-gray-200 bg-gray-50 shrink-0 select-none">
              +91
            </span>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              type="tel"
              placeholder="Student Mobile Number"
              maxLength={10}
              className="flex-1 px-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
              aria-invalid={!!errorMessage.phone}
            />
          </div>
          <FieldError message={errorMessage.phone} />
        </div>

        {/* Row 3: DOB date picker + City */}
        <div className="grid grid-cols-2 gap-2">
          {/* Date picker */}
          <div>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    triggerCls,
                    'flex items-center justify-between gap-2',
                    !formData.dateOfBirth ? 'text-gray-400' : 'text-gray-700',
                  )}
                >
                  <span className="truncate text-sm">
                    {formData.dateOfBirth ? format(formData.dateOfBirth, 'dd MMM yyyy') : 'Select DOB'}
                  </span>
                  <CalendarIcon className="size-4 shrink-0 text-gray-400" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.dateOfBirth}
                  onSelect={handleDateChange}
                  captionLayout="dropdown"
                  defaultMonth={new Date(2000, 0)}
                  startMonth={new Date(1950, 0)}
                  endMonth={new Date(new Date().getFullYear() - 5, 11)}
                  disabled={(date) => date > new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FieldError message={errorMessage.dateOfBirth} />
          </div>

          {/* City */}
          <div>
            <Input
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Student City"
              className="form-field outline-0"
              aria-invalid={!!errorMessage.city}
            />
            <FieldError message={errorMessage.city} />
          </div>
        </div>

        {/* Row 4: Course */}
        <div>
          <Select
            onValueChange={(value) => handleSelectChange('product', value)}
            value={formData.product}
            modal={false}
          >
            <SelectTrigger className={triggerCls} aria-invalid={!!errorMessage.product}>
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={2} className={'rounded-xs'}>
              <SelectItem value="SFDC" className={'hover:rounded-none'}>
                SFDC — Salesforce Developer / Admin
              </SelectItem>
              <SelectItem value="SFMC" className={'hover:rounded-none'}>
                SFMC — Salesforce Marketing Cloud
              </SelectItem>
            </SelectContent>
          </Select>
          <FieldError message={errorMessage.product} />
        </div>

        {/* API status */}
        {submitStatus === 'success' && (
          <p className="text-xs bg-green-50 text-green-700 px-3 py-2 rounded-lg" role="status">
            Thank you! Your application has been submitted.
          </p>
        )}
        {submitStatus && submitStatus !== 'success' && (
          <p className="text-xs bg-red-50 text-red-600 px-3 py-2 rounded-lg" role="alert">
            {typeof submitStatus === 'string' && submitStatus !== 'error'
              ? submitStatus
              : 'Something went wrong. Please try again.'}
          </p>
        )}

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 text-center leading-relaxed">
          By submitting this form, I agree to receive notifications from the Cloud Intellect in the form of
          SMS/E-mail/Call.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#009DE3] hover:bg-[#007acc] disabled:opacity-60 text-white font-bold text-sm py-3 rounded-sm transition tracking-widest"
        >
          {isSubmitting ? 'SUBMITTING…' : 'APPLY NOW'}
        </button>
      </form>
    </div>
  );
}

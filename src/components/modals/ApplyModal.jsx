'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { validEmail, validFullName, validIndianPhone } from '@/_helper/Regex';

export default function ApplyModal({ isOpen, onClose, selectedJob }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  // Real-time validation when buttonClicked is true
  useEffect(() => {
    if (buttonClicked) {
      formValidation();
    }
  }, [formData.name, formData.email, formData.phone, formData.experience, buttonClicked]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    setResumeError('');

    if (!file) {
      setResumeFile(null);
      return;
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'application/rtf',
    ];

    if (!allowedTypes.includes(file.type)) {
      setResumeError('Please upload a PDF, DOC, DOCX, RTF, or TXT file');
      setResumeFile(null);
      e.target.value = '';
      return;
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setResumeError('File size must be less than 5MB');
      setResumeFile(null);
      e.target.value = '';
      return;
    }

    setResumeFile(file);
  };

  const formValidation = () => {
    let nameMsg = '';
    let emailMsg = '';
    let phoneMsg = '';
    let experienceMsg = '';
    let isValid = false;

    // Name validation
    if (!formData.name.trim()) {
      nameMsg = 'Name is required';
    } else if (formData.name.length < 2) {
      nameMsg = 'Name must be at least 2 characters';
    } else if (formData.name.length > 100) {
      nameMsg = 'Name is too long';
    } else if (!validFullName(formData.name)) {
      nameMsg = 'Please enter a valid name (letters and spaces only)';
    }

    // Email validation
    if (!formData.email.trim()) {
      emailMsg = 'Email is required';
    } else if (!validEmail(formData.email)) {
      emailMsg = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      phoneMsg = 'Phone number is required';
    } else if (formData.phone.length !== 10) {
      phoneMsg = 'Phone number must be exactly 10 digits';
    } else if (!validIndianPhone(formData.phone)) {
      phoneMsg = 'Please enter a valid Indian phone number';
    }

    // Experience validation
    if (!formData.experience.trim()) {
      experienceMsg = 'Please enter your years of experience';
    } else {
      const num = parseFloat(formData.experience);
      if (isNaN(num) || num < 0 || num > 99.9) {
        experienceMsg = 'Please enter a valid number between 0 and 99.9';
      }
    }

    if (!nameMsg && !emailMsg && !phoneMsg && !experienceMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(false);
      setErrorMessage({
        name: '',
        email: '',
        phone: '',
        experience: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        email: emailMsg,
        phone: phoneMsg,
        experience: experienceMsg,
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

    // Validate resume
    if (!resumeFile) {
      setResumeError('Please upload your resume');
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);

      // Convert experience string to numeric value
      formDataToSend.append('experience', parseFloat(formData.experience));

      if (selectedJob?.title) formDataToSend.append('openingTitle', selectedJob.title);
      if (selectedJob?.linkHref) formDataToSend.append('openingIdentifier', selectedJob.linkHref);
      formDataToSend.append('source', 'career-page');
      formDataToSend.append('resume', resumeFile);

      // Use the API base URL from environment
      const apiUrl = `${process.env.API_BASE_URL}${process.env.CAREER_LEADS_SUBMIT}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Failed to submit application. Please try again.');
      }

      setSubmitStatus('success');
      setSubmitMessage(
        'Thank you! Your application has been submitted successfully. We will review it and get back to you soon.',
      );

      // Reset form and close modal after 2 seconds
      setTimeout(() => {
        resetForm();
        onClose();
      }, 2000);
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
    });
    setResumeFile(null);
    setResumeError('');
    setError(false);
    setErrorMessage({
      name: '',
      email: '',
      phone: '',
      experience: '',
    });
    setButtonClicked(false);
    setSubmitStatus(null);
    setSubmitMessage('');
  };

  const handleClose = () => {
    if (submitting) return;
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[96vh] overflow-hidden flex flex-col">
        {/* Fixed Header */}
        <DialogHeader className="shrink-0">
          <DialogTitle className="text-2xl font-bold text-[#0B1C33]">Apply for Position</DialogTitle>
          {selectedJob?.title && (
            <DialogDescription className="text-base text-gray-600">
              Applying for <span className="font-semibold text-[#0CA4EB]">{selectedJob.title}</span>
            </DialogDescription>
          )}
        </DialogHeader>

        <AnimatePresence mode="wait">
          {submitStatus === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-[#0B1C33] mb-2">Application Submitted!</h3>
              <p className="text-gray-600">{submitMessage}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={onSubmit}
              className="flex flex-col flex-1 min-h-0"
            >
              {/* Scrollable Form Fields */}
              <div
                className="overflow-y-auto flex-1 px-1 space-y-5"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#CBD5E0 #F7FAFC',
                }}
              >
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-field ${errorMessage.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  />
                  {errorMessage.name && <p className="text-sm text-red-500">{errorMessage.name}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-field ${errorMessage.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  />
                  {errorMessage.email && <p className="text-sm text-red-500">{errorMessage.email}</p>}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div
                    className={`form-field flex p-0 overflow-hidden ${errorMessage.phone ? 'border-red-500' : ''}`}
                    style={{
                      transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                    }}
                  >
                    <span className="flex items-center px-3 text-sm text-gray-500 border-r border-gray-200 bg-gray-50 shrink-0 select-none">
                      +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                      aria-invalid={!!errorMessage.phone}
                    />
                  </div>
                  {errorMessage.phone && <p className="text-sm text-red-500">{errorMessage.phone}</p>}
                </div>

                {/* Experience Field */}
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                    Years of Experience <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    step="0.1"
                    min="0"
                    max="99.9"
                    placeholder="e.g., 1, 1.5, 10"
                    value={formData.experience}
                    onChange={handleInputChange}
                    onInput={(e) => {
                      // Limit to 4 characters (e.g., 12.5)
                      if (e.target.value.length > 4) {
                        e.target.value = e.target.value.slice(0, 4);
                      }
                    }}
                    className={`form-field ${errorMessage.experience ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  />
                  {errorMessage.experience && <p className="text-sm text-red-500">{errorMessage.experience}</p>}
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm font-medium text-gray-700">
                    Resume <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx,.rtf,.txt"
                      onChange={handleResumeChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className={`flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                        resumeError
                          ? 'border-red-500 bg-red-50 hover:bg-red-100'
                          : resumeFile
                            ? 'border-green-500 bg-green-50 hover:bg-green-100'
                            : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <Upload className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-700">
                        {resumeFile ? resumeFile.name : 'Click to upload resume (PDF, DOC, DOCX, RTF, TXT)'}
                      </span>
                    </label>
                  </div>
                  {resumeError && <p className="text-sm text-red-500">{resumeError}</p>}
                  {resumeFile && !resumeError && (
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      File uploaded successfully
                    </p>
                  )}
                  <p className="text-xs text-gray-500">Maximum file size: 5MB</p>
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{submitMessage}</p>
                  </motion.div>
                )}
              </div>

              {/* Fixed Action Buttons */}
              <div className="flex gap-3 pt-4 mt-4 border-t border-gray-200 shrink-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={submitting}
                  className="flex-1 h-[46px] rounded-[4px] cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 h-[46px] rounded-[4px] bg-[#0CA4EB] hover:bg-[#0B9DD6] cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

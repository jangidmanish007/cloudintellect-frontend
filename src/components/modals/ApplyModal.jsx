'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(14, 'Phone number is too long')
    .regex(/^[0-9]+$/, 'Please enter a valid phone number'),
  experience: z
    .string()
    .min(1, 'Please enter your years of experience')
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0 && num <= 99.9;
    }, 'Please enter a valid number between 0 and 99.9'),
});

export default function ApplyModal({ isOpen, onClose, selectedJob }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      linkedinUrl: '',
      portfolioUrl: '',
    },
  });

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

  const onSubmit = async (data) => {
    // Validate resume
    if (!resumeFile) {
      setResumeError('Please upload your resume');
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);

      // Convert experience string to numeric value
      formData.append('experience', parseFloat(data.experience));

      if (data.coverLetter) formData.append('coverLetter', data.coverLetter);
      if (data.linkedinUrl) formData.append('linkedinUrl', data.linkedinUrl);
      if (data.portfolioUrl) formData.append('portfolioUrl', data.portfolioUrl);
      if (selectedJob?.title) formData.append('openingTitle', selectedJob.title);
      if (selectedJob?.linkHref) formData.append('openingIdentifier', selectedJob.linkHref);
      formData.append('source', 'career-page');
      formData.append('resume', resumeFile);

      // Use the API base URL from environment
      const apiUrl = `${process.env.API_BASE_URL}${process.env.CAREER_LEADS_SUBMIT}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
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
        reset();
        setResumeFile(null);
        setSubmitStatus(null);
        setSubmitMessage('');
        onClose();
      }, 2000);
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    if (submitting) return;
    reset();
    setResumeFile(null);
    setResumeError('');
    setSubmitStatus(null);
    setSubmitMessage('');
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
              onSubmit={handleSubmit(onSubmit)}
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
                    placeholder="John Doe"
                    {...register('name')}
                    className={`form-field ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    {...register('email')}
                    className={`form-field ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div
                    className={`form-field flex p-0 overflow-hidden ${errors.phone ? 'border-red-500' : ''}`}
                    style={{
                      transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                    }}
                  >
                    <span className="flex items-center px-3 text-sm text-gray-500 border-r border-gray-200 bg-gray-50 shrink-0 select-none">
                      +91
                    </span>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      className="flex-1 px-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>

                {/* Experience Field */}
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                    Years of Experience <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="experience"
                    type="number"
                    step="0.1"
                    min="0"
                    max="99.9"
                    placeholder="e.g., 1, 1.5, 10"
                    {...register('experience')}
                    onInput={(e) => {
                      // Limit to 4 characters (e.g., 12.5)
                      if (e.target.value.length > 4) {
                        e.target.value = e.target.value.slice(0, 4);
                      }
                    }}
                    className={`form-field ${errors.experience ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  />
                  {errors.experience && <p className="text-sm text-red-500">{errors.experience.message}</p>}
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

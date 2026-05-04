import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PROGRAMS = ['SFDC', 'SFMC']
export default function ContactFormSection({ pageData }) {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        program: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const validateField = (name, value) => {
        switch (name) {
            case "fullName":
                return value.trim() ? "" : "Full name is required";

            case "phoneNumber":
                if (!value) return "Phone number is required";
                if (!/^[6-9]\d{9}$/.test(value)) return "Invalid phone number";
                return "";

            case "email":
                if (!value) return "Email is required";
                if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email";
                return "";

            case "program":
                return value ? "" : "Select a program";

            case "message":
                return value.trim() ? "" : "Message is required";

            default:
                return "";
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;
        console.log("Form Submitted", formData);

        try {
            setLoading(true);
            setStatus(null);

            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({ ...formData }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setStatus({ type: "success", msg: "Submitted successfully!" });

            setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                program: "",
                message: "",
            });
        } catch (err) {
            setStatus({ type: "error", msg: err.message });
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="min-h-screen flex items-start justify-center py-12">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 px-4">
                <div className="flex-1 bg-white rounded-2xl border border-[#0000001A] p-6 md:p-10 h-fit">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        Send us a message
                    </h2>
                    <p className="text-sm md:text-base text-[#000000] mb-6 font-[300]">
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="flex-1 border border-[#00000040] rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none"
                            />
                            <input
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="flex-1 border border-[#00000040] rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none"
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            className="w-full border border-[#00000040] rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none "
                        />
                        <div className="relative text-xs text-[#000000BF]">

                            <select
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                required
                                className="w-full border border-[#00000040] rounded-md px-4 py-3 text-xs text-[#000000BF] bg-white appearance-none outline-none cursor-pointer"
                            >
                                <option value="" className="text-xs text-[#000000BF]">Select Program</option>
                                {PROGRAMS.map((p) => (
                                    <option key={p} className="text-xs text-[#000000BF]">{p}</option>
                                ))}
                            </select>
                            <ChevronDown
                                size={16}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#000000BF] pointer-events-none"
                            />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={5}
                            className="w-full border border-[#00000040] rounded-md px-4 py-3 text-xs text-[#000000BF] placeholder-gray-400 outline-none resize-none"
                        />

                        <div className="text-xs text-[#000000BF] py-2">
                            By submitting this form, I agree to receive notifications from the Cloud Intellect in the form of SMS/E-mail/Call.
                        </div>

                        <button className="cursor-pointer w-full bg-[#009DE3] text-white text-xs font-bold tracking-widest uppercase p-3 rounded-sm">
                            APPLY NOW
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
                            <div className="flex-shrink-0 w-8 h-8 bg-[#22C55E33] rounded-full flex items-center justify-center">
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
                            <div className="flex-shrink-0 w-8 h-8 bg-[#22C55E33] rounded-full flex items-center justify-center">
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
                            <div className="flex-shrink-0 w-8 h-8 bg-[#22C55E33] rounded-full flex items-center justify-center">
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
                        <div className="flex-shrink-0 w-10 h-10 bg-[#009FFF1A] rounded-md flex items-center justify-center">
                            <MapPin size={20} className="text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-md font-bold text-black mb-1">Pune</h4>
                            <p className="ranade-font text-xs md:text-sm text-black leading-relaxed mb-1.5">
                                3rd floor block 306, Baner Biz Bay,
                                Laxman Nagar, Baner, Pune,
                                Maharashtra 411045
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
                        <div className="flex-shrink-0 w-10 h-10 bg-[#009FFF1A] rounded-md flex items-center justify-center">
                            <MapPin size={20} className="text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-md font-bold text-black mb-1">Nagpur</h4>
                            <p className="ranade-font text-xs md:text-sm text-black leading-relaxed mb-1.5">
                                Cloud Intellect, Plot no. 8, Sanjay
                                Heights, Beltarodi Rd, near ICICI Bank,
                                Besa, Nagpur, Maharashtra 440037
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
            </div >
        </section >
    );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import resumeData from "@/app/data/resume.json";

export default function Contact() {
    return (
        <footer className="relative py-24 px-8 bg-black text-white border-t border-white/10 z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter"
                >
                    Let's Connect
                </motion.h2>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                    Open to opportunities in Data Analytics, Product Management, and Business Intelligence.
                </p>

                <div className="flex justify-center gap-8">
                    <a
                        href={`mailto:${resumeData.personalInfo.email}`}
                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    <a
                        href={resumeData.personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    {/* GitHub link structure if available, otherwise just placeholder or generic */}
                    <a
                        href={resumeData.personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                </div>

                <div className="mt-24 text-zinc-600 text-sm">
                    © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

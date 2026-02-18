"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import resumeData from "@/app/data/resume.json";

// Temporary mock data until we move the JSON to a reachable place
const experience = resumeData.experience;

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative bg-zinc-950 text-white">
            {experience.map((job, index) => {
                return (
                    <JobSection key={index} job={job} index={index} total={experience.length} />
                );
            })}
        </section>
    );
}

function JobSection({ job, index, total }: { job: any; index: number; total: number }) {
    return (
        <div className="h-screen flex items-center justify-center sticky top-0 border-t border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-4xl w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    {/* Left side: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, margin: "-20%" }}
                    >
                        <h2 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-4">
                            0{index + 1} / 0{total} — Experience
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2">{job.company}</h3>
                        <p className="text-xl text-zinc-400 mb-6">{job.role}</p>
                        <ul className="text-lg leading-relaxed text-zinc-300 max-w-md list-disc list-outside ml-5 space-y-2">
                            {job.bullets.map((bullet: string, i: number) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Right side: Space for 3D model interaction */}
                <div className="hidden md:block">
                    {/* The 3D model in the background will be visible here */}
                </div>
            </div>
        </div>
    );
}

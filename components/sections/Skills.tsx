"use client";

import { motion } from "framer-motion";
import resumeData from "@/app/data/resume.json";

const skills = resumeData.skills;

export default function Skills() {
    return (
        <section className="relative min-h-screen py-32 px-8 bg-zinc-950 text-white z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter text-center"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <SkillCard key={category} category={category} skillList={skillList as string} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCard({ category, skillList, index }: { category: string; skillList: string; index: number }) {
    const items = skillList.split(", ");

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:bg-zinc-800/40 transition-colors duration-300 group"
        >
            <h3 className="text-xl font-semibold mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {category}
            </h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

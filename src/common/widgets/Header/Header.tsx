"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { navData } from "@config/constants";
import AnimatedTextCharacter from "@components/motion/AnimatedTextCherecter";
import { useLanguage } from "../../../context/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  // Motion variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <header className="top-0 w-full z-50 relative py-6 mx-auto container">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-1">
          <AnimatedTextCharacter
            text="Vung"
            className="text-4xl font-semibold text-sky-700"
          />
          <AnimatedTextCharacter
            text="le"
            className="text-4xl text-slate-700/80"
          />
        </Link>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex items-center space-x-6"
        >
          {navData.map((e: string, i: number) => (
            <motion.li
              key={i}
              variants={child}
              className="hidden md:flex items-center space-x-2"
            >
              <a
                href={`#${e.toLowerCase()}`}
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <span className="text-sky-400 font-mono">0{i + 1}.</span>{" "}
                {t(`nav.${e.toLowerCase()}`)}
              </a>
            </motion.li>
          ))}

          <div className="flex items-center ml-4">
            <button
              onClick={toggleLanguage}
              className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                language === "vi" ? "bg-sky-700" : "bg-sky-700"
              }`}
            >
              <motion.div
                animate={{ x: language === "vi" ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
              >
                {language === "en" ? (
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                      width: "1.2em",
                      height: "1.2em",
                      borderRadius: "50%",
                    }}
                    title="US"
                  />
                ) : (
                  <ReactCountryFlag
                    countryCode="VN"
                    svg
                    style={{
                      width: "1.2em",
                      height: "1.2em",
                      borderRadius: "50%",
                    }}
                    title="VN"
                  />
                )}
              </motion.div>
            </button>
          </div>
        </motion.ul>
      </div>
    </header>
  );
};

export default Header;
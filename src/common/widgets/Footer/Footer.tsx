import React from "react";
import { useLanguage } from "@context/LanguageContext";

const Footer = () => {
    const { t } = useLanguage(); 
  
  return (
    <section id="__footer" className="py-5">
      <div className="text-center text-sm text-slate-400">
        <p className="opacity-90">
          {t("footer.get15")}{" "}
          <a
            href="https://calendly.com/levanvung113/30min"
            target="_blank"
            className="text-sky-400"
          >
           {t("footer.f")}
          </a>.{" "}
          <a
            href="https://bento.me/vungdev"
            target="_blank"
            className="text-sky-400"
          >
            Le Van Vung
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;

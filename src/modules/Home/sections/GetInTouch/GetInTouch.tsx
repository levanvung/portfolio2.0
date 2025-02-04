import React from "react";
//
import Button from "@components/Button";
import { useLanguage } from "@context/LanguageContext";

const GetInTouch = () => {
    const { t } = useLanguage(); 
  
  const content =
    t("next.but")

  return (
    <section id="contact" className="text-center my-4">
      <h1 className="flex items-center gap-2 text-md justify-center font-normal text-sky-400">
        <span className=" font-mono">04. </span>
        {t("next.title")}
      </h1>

      <h1 className="font-medium text-slate-300 text-4xl text-center mt-5">
        {" "}
        {t("next.header")}{" "}
      </h1>

      <p className="text-slate-400 max-w-[500px] mx-auto my-3 mb-10">
        {content}
      </p>

      <Button href="mailto:levanvung113@gmail.com" outlined>
        {t("next.question")}
      </Button>
    </section>
  );
};

export default GetInTouch;

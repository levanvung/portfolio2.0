import { WorkedTypes } from "./types";
import { useLanguage } from "@context/LanguageContext";

const useWorkedData = (): WorkedTypes[] => {
  const { t } = useLanguage(); 

  return [
    {
      id: 0,
      label: "Torus Engineering",
      description: [
        t("torus.description"),
        t("torus.description_1"),
        t("torus.description_2"),
        t("torus.description_5"),

      ],
      deadline: " 02/2022 - 07/2023",
      title: "Full Stack Developer",
      company: "https://www.torus.vn/",
      url: "https://www.torus.vn/",
    },
    {
      id: 1,
      label: "WGHN",
      description: [
        t("wghn.description"),
        t("wghn.description_1"),
        t("wghn.description_2"),
        t("wghn.description_5"),
      ],
      deadline: "08/2023 - 17/2025",
      title: "Front-end Developer",
      company: "https://wghn.net",
      url: "https://wghn.net/vi",
    },
  ];
};

export default useWorkedData;

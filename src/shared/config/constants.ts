import classNames from "classnames";
import { ProjectTypes } from "./types";
import { useLanguage } from "@context/LanguageContext";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["about", "experiences", "works", "contact"];

// project data
const Userprojects = (): ProjectTypes[] => {
  const { t } = useLanguage();

  return [
    {
      title: t("project.hio"),
      description:
        t("project.description_hio"),
      tech: [
        "Node.js",
        "Vue.Js",
        "Mysql",
        "AWS S3",
        "Express.Js",
        "Tailwind CSS",
        "VueX",
        // "@reduxjs/toolkit",
        // "bcryptjs",
        // "autoprefixer",
        // "cloudinary",
        // "eslint",
        // "jsonwebtoken",
        // "eslint-config-next",
        // "mongoose",
        // "keen-slider",
        // "multer",
        // "leaflet",
        // "multer-storage-cloudinary",
        // "next",
        // "postcss",
        // "react",
        // "react-dom",
        // "react-hook-form",
        // "react-icons",
        // "react-leaflet",
        // "react-redux",
        // "tailwind-scrollbar-hide",
        // "tailwindcss",
        // "world-countries",
      ],
      live: "https://hio.wghn.net/",
      thumbnail: "{96A3FAA6-ECD5-489E-BB72-32D3DD272D00}.png",
      featured: true,
    },

    {
      title: t("project.cmsWgroup"),
      description:
        t("project.descript_cms"),
      tech: [
        "vuejs",
        "vuex",
        "nodejs",
        "expressjs",
        "axios",
        "eslint",
        "mysql",
        "element-ui",
        "cors",
        "next",
        "dotenv",
        "postcss",
        "jsonwebtoken",
        "validator",
        "tailwindcss",
        "nodemon",
        "@tailwindcss/forms",
      ],
      live: "https://admin.wghn.net/",
      thumbnail: "{B3F974D2-D7BF-4A57-AA68-63A48C2A7C7D}.png",
      featured: false,
    },

    {
      title: t("project.chat.title"),
      description:
        t("project.chat.description"),
      tech: [
        "@reduxjs/toolkit",
        "nodejs",
        "axios",
        "socket.io",
        "bcryptjs",
        "eslint",
        "eslint-config-next",
        "jsonwebtoken",
        "postcss",
        "react",
        "mysql",
        "react-dom",
        "react-hook-form",
        "react-redux",
        "sharp",
      ],
      live: "https://chat.wghn.net/",
      thumbnail: "{D1644685-E4C8-4495-966C-1042B3E17582}.png",
      featured: false,
    },

    {
      title: t("project.cmsapp.titile"),
      description:
       t("project.cmsapp.description"),
      tech: [
        "vuejs",
        "vuex",
        "nodejs",
        "axios",
        "express",
        "eslint-config-next",
        "mysql",
      ],
      live: "https://apps.apple.com/vn/app/wghn/id1590376779?l=vi",
      thumbnail: "{2DE238DE-1104-48F1-928B-47B029DD768B}.png",
      featured: false,
    },
    {
      title: t("project.bellai.title"),
      description:
        t("project.bellai.description"),
      tech: [
        "python",
        "axios",
        "reactjs",
        "eslint",
        "Django",
        "mysql",
        "react-dom",
      ],

      live: "https://demo.belle.ai/index",
      thumbnail: "{58794A6E-CFE9-491A-8FD3-C6AC3C85BD17}.png",
      featured: false,
    },
    {
      title: t("project.cmsbell.title"),
      description:
        t("project.cmsbell.description"),
      tech: [
        "php",
        "wordpress",
        "awss3",
        "axios",
        "eslint-config-next",
        "phpMyadmin",
      ],
      live: "https://www.belle.ai/",
      thumbnail: "{68D18261-1563-4DBE-9B80-CC2822C5DF4E}.png",
      featured: false,
    },
    {
      title: t("project.facelogin.title"),
      description:
       t("project.facelogin.description"),
      tech: [
        "python",
        "tensorflow",
        "html",
        "css",
        "python flask",
        "mysql",
      ],
      live: "https://github.com/levanvung/faceLOGIN",
      github:"https://github.com/levanvung/faceLOGIN",
      thumbnail: "{D803B5BA-F9AD-468D-A2CF-C3FD1F2A5C52}.png",
      featured: false,
    },
  ];
};
export default Userprojects;

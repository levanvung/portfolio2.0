import React from 'react'
import { motion } from 'framer-motion'
//
import Content from './partials/Content'
import { fadeLeft, motionStep } from '@config/motion'
import { useLanguage } from "@context/LanguageContext";

const Worked = () => {
      const { t } = useLanguage(); 
  
  return (
    <section id='experiences' className='container' >
      
      <motion.h1 variants={fadeLeft} {...motionStep} className='flex items-center gap-2 text-lg md:text-3xl font-medium text-slate-300' > 
        <span className='text-sky-400 font-mono' >02. </span>
       {t("work.title")}
      </motion.h1>

      <div className='mt-14' >
        <Content /> 
      </div>

    </section>
  )
}

export default Worked
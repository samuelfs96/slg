import { Dropdown } from 'flowbite-react'
import es from '../img/icons/es.png'
import en from '../img/icons/en.png'
import React, { useMemo } from 'react'

const LanguageSwitch = ({
    language,
    handleChangeLanguage
}) => {

  const flag = useMemo(() => {
    if(language === 'es'){
        return es
    }else if(language === 'en'){
        return en
    }
  }, [language])

  return (
    <Dropdown
        label={<img src={flag} className="w-5 max-lg:w-8" alt={language} />}
        inline={true}
    >
        <Dropdown.Item onClick={() => handleChangeLanguage('es')}>
            <img src={es} className="w-5 max-lg:w-8" alt={language} /> <span className='ml-2 text-sgl-gray'>Español</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChangeLanguage('en')}>
            <img src={en} className="w-5 max-lg:w-8" alt={language} /> <span className='ml-2 text-sgl-gray'>English</span>
        </Dropdown.Item>
    </Dropdown>
  )
}

export default LanguageSwitch
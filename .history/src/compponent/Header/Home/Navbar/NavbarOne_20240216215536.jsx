import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material'
import React from 'react'

const NavbarOne = () => {
//   <div className="App">
//   <div className="App-header">
//     <h2>{t("Welcome to React")}</h2>
//     <button onClick={() => changeLanguage("de")}>de</button>
//     <button onClick={() => changeLanguage("en")}>en</button>
//   </div>
//   <div className="App-intro">
//     <Trans>
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </Trans>
//     <Trans i18nKey="welcome">trans</Trans>
//     <Trans>
//       {index + 1} <a>xxx</a>
//     </Trans>
//   </div>
//   <div style={{ marginTop: 40 }}>
//     Learn more:&nbsp;
//     <a href="https://react.i18next.com">https://react.i18next.js</a>
//   </div>
// </div>
  return (
    <div className='text-light d-flex justify-content-between container-fluid py-2 border-bottom' style={{backgroundColor:"#001933"}}>
      <span>Welcome to Top Store</span>
      <div><Facebook/>
      <Instagram/>
      <YouTube/>
      <WhatsApp/>
      </div>
    </div>
  )
}

export default NavbarOne

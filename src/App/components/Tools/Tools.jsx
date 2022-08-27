import React from 'react';
import style from './Tools.module.scss'
import toolsImg from '../../../assets/images/Softwares.png'
import Headline from '../../../assets/images/Headline.png'

function Tools() {
  return (
    <div className={style.wrapper} >
      <div className={style.container} >
      <img src={Headline} alt="tools image heading"  className={style.headline} />
      <img src={toolsImg} alt="tools image" className={style.toolsImg}  />
</div>
</div>

  )
}

export default Tools
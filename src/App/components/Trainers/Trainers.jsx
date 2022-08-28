import React from 'react'
import style from './Trainers.module.scss'

function Trainers() {
  return (
    <div className={style.teacher} >
    <div className={style.wrapper}>
        <div className={style.container} >
            <h1>Welcome to ITIC</h1>
            <p>  labore cupiditate laborum a nihil voluptatibus sapiente possimus voluptatem enim iste atque, in et provident. Inventore, consequuntur libero quis voluptatibus autem nulla! Quas, magni sequi qui eaque aliquam optio quos commodi vitae. Ducimus consequuntur quia molestiae, corrupti modi, velit minus quidem eius doloremque incidunt hic perspiciatis vero tempora facere unde perferendis eos! Vitae?</p>
             <div className={style.surname} >
                <em>B.Sadullaev</em>
                <img src="https://itic.netlify.app/streamline-icon-certified-ribbon@80x80.png" alt="tick" />
             </div>
        </div>
        <img src='https://itic.netlify.app/new6.png' alt="best teacher photo" />
    </div>
    </div>
  )
}

export default Trainers
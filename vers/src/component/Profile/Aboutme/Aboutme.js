import React from 'react';
import s from './Aboutme.module.css'
let Aboutme = () => {
    return (
        <div className={s.aboutme}>
            <div className={s.ava}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjpau-JaaDL0Jq6Rxk43OwKApm3IANQmpTFBrnmuXdh5l1AJYm&usqp=CAU' />

            </div>
            <div className={s.metext}>
                <p>Igor Bezus</p>
                <p>Madrid</p>
                <p>21 eyars</p>

            </div>


        </div>
    )

}
export default Aboutme;
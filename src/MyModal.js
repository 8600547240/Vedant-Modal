import React, { Fragment } from 'react'
import styles from './styles.module.css'

export const MyModal = ({isShowModal,text,isShowYesBtn,isShowCloseBtn,fnModalBtnClick}) => {
  return (
    <Fragment>
      {isShowModal && <>
      <div className={styles.mask}></div> 
      <div className={styles.modalContent}>
          <h3>{text}</h3>
          <p className={styles.modalBtnPara}>
           {isShowYesBtn && <button 
           onClick={() => {
            fnModalBtnClick('yes')
           }} className={styles.modalBtn}>YES</button>} 
           {isShowCloseBtn && <button  onClick={() => {
            fnModalBtnClick('close')}} className={styles.modalBtn}>CLOSE</button>} 
          </p> 
      </div> 
      </>
      }
    </Fragment>
  )
}

 

import React, {useState} from 'react'

import { GetMyInfo,MyModal } from 'vedant-modal'
import 'vedant-modal/dist/index.css'

const App = () => {
  const [isShowModal,setIsShowModal] = useState(true);
  const fn = (opt) => {
    alert(opt);
    setIsShowModal(false);
  }
  return <div> 
    <GetMyInfo name="Sachin" loc="Mumbai" phone="33333"/>
    <MyModal fnModalBtnClick={fn} isShowModal={isShowModal} text="R u sure..." isShowYesBtn={true} isShowCloseBtn={true}/> 
  </div>
}

export default App

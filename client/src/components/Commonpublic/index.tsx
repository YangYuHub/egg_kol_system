import styles from './index.less'
import React, { ReactNode } from 'react'

type Iprop = {
  // obj:{
    icon:ReactNode,
    color:string,
    name:string,
    mainnum:number
  // }
}

const Assembly:React.FC<Iprop> = (props)=>{
  return (
    <div className={styles.box}>
      <div style={{backgroundColor:props.color}} className={styles.left}>
        <p className={styles.iconStyle}>
          {props.icon}
        </p>
        
      </div>
      <div className={styles.right}>
        <p>{props.mainnum}</p>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Assembly
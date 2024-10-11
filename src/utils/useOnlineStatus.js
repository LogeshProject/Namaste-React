import React from 'react'

import { useEffect, useState } from "react";

const userOnline = () => {


    const [onlineStatus , setOnlineStatus] = useState();

    useEffect(()=>{

        window.addEventListener('offline', ()=>{
            setOnlineStatus(false)
        })
        window.addEventListener('online', ()=>{
            setOnlineStatus(false)
        })

    },[])



  return onlineStatus
  
}

export default userOnline   // custom hook



import { React, useState, useEffect } from 'react'


import intl from "react-intl-universal";


export default function Test() {

 


  return (
    
    <div>test
       <h1>{intl.get('title')}</h1>
       <h5>{intl.get('HELLO', { name: 'Tony', where: 'Alibaba' })}</h5>
    </div>
  )
}

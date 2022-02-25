import React, { useState } from 'react';
import './TestModel.css';

export default function TestModel() {
    
    const [open, setOpen] = useState(false);

    const modal = (
        <div className='modal'>
            <div className='closePopUp'>
            <button onClick={()=>setOpen(!open)}>X</button>
            </div>
            <div >Amazon SQS provides queues for high-throughput, system-to-system messaging. You can use queues to decouple heavyweight processes and to buffer and batch work. Amazon SQS stores messages until microservices and serverless applications process them.Amazon SQS provides queues for high-throughput, system-to-system messaging. You can use queues to decouple heavyweight processes and to buffer and batch work. Amazon SQS stores messages until microservices and serverless applications process them.</div>
        </div>
    )

  return (
      <div>
          <div>{open && modal}</div>
          <button onClick={()=>setOpen(!open)}>Open</button>
      </div>
  )
}

'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function AdjustedTypeWriter(){
        
    return <div className='font-medium font-stretch-expanded text-3xl'><Typewriter
            words={["How're you",'Kamusta?', '元気ですか？','(˶ˆᗜˆ˵)']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></div>
    
}
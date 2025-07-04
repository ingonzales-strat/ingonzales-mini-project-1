'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function AdjustedTypeWriter(){
        
    return <div className='font-medium font-stretch-expanded md:text-2xl lg:text-3xl'><Typewriter
            words={["How're you?","Weather ok?",'Kamusta?','Ano ulam mo? (๑ᵔ⤙ᵔ๑)', '元気ですか？','疲れたか？','頑張ります','(˶ˆᗜˆ˵)','(っ˕ -｡)ᶻ 𝗓 𐰁']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></div>
    
}
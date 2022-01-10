import { useState, useEffect } from 'react'
type NavProps = {
    height?:number,
    bgColor?:string,
    alignment?:string
}

const Nav = ( props: NavProps ) => {
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            //Calculate vertical distance the user has scrolled
            const y = document.body.scrollTop || document.documentElement.scrollTop

            //If the user has scrolled more than 50px, shrink Nav, else set Nav to initial value
            y > 50 ? setNavHeight(50) : setNavHeight(height)
        })
    },[])
    const { height, bgColor, alignment } = props
    const [navHeight, setNavHeight] = useState(height)
    const outerNavStyle={
        height:navHeight,
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:alignment,
        position:'fixed' as 'fixed',
        transition:'.15s ease-in-out',
        backgroundColor:bgColor
    }
    const innerNavStyle={
        display:'flex',
        padding:'0 2.25em',
        gap:25
    }
    return (
        <div style={outerNavStyle}>
           <div style={innerNavStyle}>
               <a>Item 1</a>
               <a>Item 2</a>
               <a>Item 3</a>
           </div>
        </div>
    )
}
export default Nav

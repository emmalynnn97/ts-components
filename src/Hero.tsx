type HeroProps = {
    img?:string,
    overlayColor?:string,
    height?:number
}

const Hero = ( props:HeroProps ) => {
    const {img, overlayColor, height} = props
    const heroOuterStyle={
        backgroundImage:`url(${img})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:`${height}vh`,
        width:'100%'
    }
    const heroInnerStyle={
        backgroundColor:overlayColor,
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
    const ctaStyle={
        width:'50%',
        gap:15,
        display:'flex',
        flexFlow:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }
    const btnStyle={
        padding:'.5em 2em',
        backgroundColor:'white',
        borderRadius:'15px',
        textDecoration:'none',
        color:'black',
        fontWeight:700
    }
    return (
        <div style={heroOuterStyle}>
            <div style={heroInnerStyle}>
                <div style={ctaStyle}>
                    <h1>CTA Text</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia quaerat dignissimos inventore deleniti sit rerum illum labore! Ex vitae dolores suscipit. Beatae, repellendus nesciunt dolorum maxime quasi labore veritatis?</p>   
                    <a style={btnStyle} href="#">Learn More</a>
                </div>
            </div> 
        </div>
    )
}
export default Hero

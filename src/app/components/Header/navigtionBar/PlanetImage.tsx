const PlanetImage = () => {
    return ( 
        <div 
        className="bg-cover absolute right-0 top-0
        w-[60%] h-[30%]
        sm:w-[70%] sm:h-[50%]
        md:w-[70%] md:h-[60%]
        lg:w-[70%] lg:h-[80%]
        xl:w-[70%] xl:h-[100%]"
        style = {{ backgroundImage: 'url("/media/images/planet.png")',
        pointerEvents: "none" }}
        >
        </div>
     );
}
 
export default PlanetImage;
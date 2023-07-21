'use client'

const navLinks = [
    'About us',
    'Technology stack',
    'Solutions',
    'Team',
    'Contact us'
];

const NavigationOptions = () => {
    return ( 
        <div className="self-center flex-row gap-14 items-center hidden md:block">
            {navLinks.map((link,index)=>{
                return <a className="
                text-white
                opacity-75
                xl:text-lg/5 cursor-pointer xl:pl-6 
                lg:text-[12px] lg:pl-4
                md:text-[11px] md:pl-2" 
                key={index}>{link}</a>
            })}
        </div>
     );
}
 
export default NavigationOptions;
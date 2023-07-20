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
        <div className="elf-center flex-row gap-14 items-center hidden md:block">
            {navLinks.map((link,index)=>{
                return <a className="text-lg/5 cursor-pointer pl-9 transition duration-300" key={index}>{link}</a>
            })}
        </div>
     );
}
 
export default NavigationOptions;
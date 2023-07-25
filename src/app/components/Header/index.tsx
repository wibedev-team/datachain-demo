import PlanetImage from "./navigtionBar/PlanetImage";
import NavigationOptions from "./navigtionBar/listNavigation/NavigationOptions";
import BurgerNavigation from "./navigtionBar/burgerNavigation/BurgerNavigation";

const Header = () => {
    return (
        <div className="w-full items-center
        md:pt-20 md:pl-16
        lg:pl-16">
            <NavigationOptions/>
            <PlanetImage/>
            <BurgerNavigation/>
        </div>
        
        
     );
}
 
export default Header;
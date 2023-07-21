import PlanetImage from "./navigtionBar/PlanetImage";
import NavigationOptions from "./navigtionBar/listNavigation/NavigationOptions";
import BurgerNavigation from "./navigtionBar/burgerNavigation/BurgerNavigation";

const Header = () => {
    return (
        <div className="w-full items-center
        md:pt-20 md:pl-16
        lg:pl-16">
            <BurgerNavigation/>
            <NavigationOptions/>
            <PlanetImage/>
        </div>
        
        
     );
}
 
export default Header;
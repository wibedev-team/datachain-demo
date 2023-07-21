import WriteToUsIcon from "./WriteToUsIcon";

const WelcomeBlock = () => {
    return ( 
    <div className="w-[875px] h-[515px] ml-16 mt-72">
        <h1 className="text-[118px]/[132px] text-white font-extrabold">Research <br/> & development</h1>
        <p className="text-[24px]/[36px] mt-14 text-gray-400 opacity-40" >Essential software tools for analytics,<br/> visualization, automatization and monitoring.</p>
        <button className="flex mt-12 w-72 h-16  text-green-100 text-lg/5 border-solid border-[1px] border-green-100 items-center justify-center gap-5">
            WRITE TO US
            <WriteToUsIcon/>
        </button>
    </div> );
}
 
export default WelcomeBlock;
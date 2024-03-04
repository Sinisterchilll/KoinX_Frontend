export function Appbar(){
    return (
        <div className="flex flex-row mx-8 my-5">
            <div className="basis-1/2">
                <img src="src\assets\react.svg" alt="" /> 
           </div>
           <div className="basis-1/2 flex justify-around test-xs font-medium">
            <div>Crypto Taxes </div>
            <div>Free Tools</div> 
            <div>Resource Centre</div>
            <div className="bg-blue-600 text-white rounded-lg px-4 py-1"><button>  Get Started  </button></div>
           </div>
            
        </div>
    )
}
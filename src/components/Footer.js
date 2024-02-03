import { useContext } from "react"
import { AppContext } from "./context/AppContext"

function Footer(){
     
      const {page,totalPages,changePageHandler}=useContext(AppContext);
      console.log(page)

    return (
        <div className=" flex mt-12  border-black-900 border-t-2 w-full h-[55px]">
             {
                page >1 && page < totalPages? (<div className="flex ml-[370px] mt-3
                 border-black-900 rounded-[2px] gap-4">
                    <button  onClick={()=>changePageHandler(page-1)}>Previous</button>
                    <button onClick={()=>changePageHandler(page+1)} >Next</button>
                </div>):(<div>
                    {
                        page===1?(<div className="ml-[370px] mt-3 border-black-900 rounded-[2px]">
                            <button className="rounded-md " onClick={()=>changePageHandler(page+1)}>Next</button>
                        </div>):(<div className="ml-[370px] mt-3 border-black-900 rounded-[2px] ">
                            <button onClick={()=>changePageHandler(page-1)}>Previous</button>
                        </div>)
                    }
                </div>)
             }
             <div className="ml-[500px] mt-3">
                Page <span>{page}</span> of <span>{totalPages}</span>
             </div>

        </div>
    )
}
export default Footer
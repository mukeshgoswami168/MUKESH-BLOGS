import { useContext } from "react"
import Spinner from "./Spinner"
import { AppContext } from "./context/AppContext";


function Blogs(){
      const {loading,posts}=useContext(AppContext);
      console.log("post data")
      console.log(posts)

     return (
        <div className="flex flex-col items-center mx-[370px] mt-[10px]">
        {
            loading ? (<div className=" "><Spinner></Spinner></div>):  (
                posts.length===0 ?(<div>No Post Found </div>):(<div>
                {
                    posts.map((post)=>{
                       return <div key={post.id} className="mt-7" >
                            <p className=" text-[20px] font-bold">{post.title}</p>
                            <p className="mt-2">By <span className="italic">{post.author}</span> on <spna className="font-bold underline">{post.category}</spna></p>
                            <p>Posted On <span>{post.date} </span></p>
                            <p className="mt-3  font-sans font-size-[16px]">{post.content}</p>
                            <div className=" flex mt-1 text-[12px] gap-3 ">
                                {
                                    post.tags.map((tag)=>{
                                        return <span className=" text-blue-700 font-semibold underline">{`#${tag}`}</span>
                                    })
                                }
                                </div>
                           
                            </div>
                    })
                }
                </div>)
              )
        }
    
        </div>
     )
}

export default Blogs
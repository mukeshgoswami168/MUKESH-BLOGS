import { createContext ,useState} from "react";
import {baseUrl} from "../../baseUrl"
export  const AppContext=createContext();

 export default function AppContextProvider({children}){
       const [loading,setLoading]=useState(false);
       const[page,setPages]=useState(1);
       const[totalPages,setTotalPages]=useState(null);
       const[posts,setPost]=useState([]);

      async function fetchDataBlogs(page=1){
        setLoading(true);
      let url=`${baseUrl}?page=${page}`
        try{
               console.log("datgetchinf")
               const result= await fetch(url);
               const data= await result.json();
              
               setPages(data.page);
               
               setPost(data.posts);
               setTotalPages(data.totalPages)
        }
        catch{
               console.log("Error in fetching data");
               setPages(1) ;
               setPost([]);
               setTotalPages(null);      
        }
        setLoading(false);
      }
  
        function changePageHandler(page){
            setPages(page);
            fetchDataBlogs(page)
        }

       const value={
        loading,
        setLoading,
        page,
        setPages,
        totalPages,
        setTotalPages,
        posts,
        setPost,
        changePageHandler,
        fetchDataBlogs
       };

       return <AppContext.Provider value={value}>
           {children}
       </AppContext.Provider>
  }

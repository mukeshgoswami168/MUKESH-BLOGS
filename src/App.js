import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
import { useContext, useEffect } from "react";
import { AppContext } from "./components/context/AppContext";

export default function App() {
      
  const {fetchDataBlogs}=useContext(AppContext);
   
   useEffect(()=>{
    fetchDataBlogs();
  }, []);

  return <div className=" flex flex-col  ">
       <Header className="flex items-center   ">

       </Header>
       <Blogs></Blogs>
       <Footer className="fixed"></Footer>
    </div>;
}

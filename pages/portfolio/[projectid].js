
import { useRouter } from "next/router";

const Dynamiroute = () => {
    
    const router= useRouter();
  console.log(router.query.projectid)
    return ( 

   <div> 
        <h2>This is a dynamic route {router.pathname} </h2> 
    
        <h2>This is the exact name we typed in</h2>
        
       {router.query.projectid}
       </div>

     );
}
 
export default Dynamiroute;
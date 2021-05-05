
import { useRouter } from "next/router";

const OneClientProject = () => {

    console.log(useRouter().pathname)
    console.log(useRouter().query)

    return ( 
        <div>
            <h1>
                This is a nested dynamic routed file about a single clients 
                projects
            </h1>
        </div>
     );
}
 
export default OneClientProject;
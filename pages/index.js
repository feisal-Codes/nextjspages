// import Head from 'next/head'
// import Image from 'next/image'
//styles.container
import Link from "next/link";


const Homepage = () => {
  return (  
  <div >
    <h1>This is the homepage</h1>
    
    <ul>
    <li><Link href ="/about">About page</Link></li>
    <li><Link href ="/blog">Blog page</Link></li>
    <li><Link href ="/clients">Clients page</Link></li>
    </ul> 
  
  
  
  </div>

  );
}
 
export default Homepage;



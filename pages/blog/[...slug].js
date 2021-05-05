import { useRouter } from "next/router";

const Blogpost = () => {
  const router = useRouter();
  const myval = router.query;
  console.log(myval);
  return (
    <div>
      <h1>this catches all parameters in url, dynamic routing</h1>
       {myval.slug}
       
    </div>
  );
};

export default Blogpost;

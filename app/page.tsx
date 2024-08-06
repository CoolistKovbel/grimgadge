import { toast } from "react-toastify";
import NavCmp from "./components/nav-cmp";

export default async function Home() {


  // Setup connection
  const getEtherAccount = async () => {
    try {
      toast("account connecteddd")




      
    } catch (error) {
      toast("eroorr no ceonntionss")
    }
  }


  return (
    // app
    <main className="min-h-screen w-[100%] p-10 relative">
      
    {/* Screen component */}
    <div className="w-full p-4 bg-[#425] h-[400px]" >

    </div>

    {/* nav component */}
    <NavCmp />

    </main>
  );


}


// helper functions
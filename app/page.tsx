import NavCmp from "./components/nav-cmp";

export default async function Home() {


  // Setup connection
  const getEtherAccount = async () => {
    try {
      console.log("get account")




    } catch (error) {
      console.log("error", error)
    }
  }


  const gg = await getEtherAccount()
  console.log(gg, "woooofoff")

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
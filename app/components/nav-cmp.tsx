"use client";

import { useState } from "react";
import { registerUser } from "../lib/action";
import { useModal } from "../hooks/use-modal-store";

const NavCmp = () => {
  const [open, setOpen] = useState(false);
  const { onOpen } = useModal()
  const isLogged = false;

  const handleClickFi = async () => {
    try {
      console.log("handling click");
      setOpen((prev) => !prev);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSunmit = async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    try {
      console.log("handling submit");

      const formData = new FormData(e.currentTarget);

      //   Deal with response
      const res = await registerUser(formData);

      console.log(res);

      form.reset();
    } catch (error) {
      console.log("Error,", error);
    }
  };


  const handeLogin = async () => {
    try {
      onOpen("AuthUser")
    } catch (error) {
      console.log("error", error)
    }
  }


  return (
    <nav
      id="navItem"
      className="flex items-center gap-2 p-5 bg-[#444] relative"
    >
      {/* Drop down butn */}
      <i
        className="bg-[#444] hover:bg-[#333] p-2  text-2xl"
        onClick={handleClickFi}
      >
        💿
      </i>

      {open && (
        <div className="absolute w-[300px] h-[250px] p-4 bg-[#424] drop-shadow-lg -top-[250px] left-0 flex justify-between item-center flex-col gap-4">
          <h2 className="text-2xl font-bold">GrimGadge ⌚️</h2>
         
          <form onSubmit={handleSunmit}>
            <div className="p-4 bg-[#626] flex items-center flex-col gap-4">
              <label className="flex items-center justify-between w-full">
                <span className="text-sm">Username:</span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="usernae"
                  className="w-[50%] p-1 bg-[#444] text-white drop-shadow-lg"
                />
              </label>

              <label className="flex items-center justify-between w-full">
                <span className="text-sm">Meta Address:</span>
                <input
                  type="text"
                  id="metaAddress"
                  name="metaAddress"
                  className="w-[50%] p-1 bg-[#444] text-white drop-shadow-lg"
                />
              </label>
            </div>
            <div>
            <button onClick={handeLogin}>Login</button>
            <button className="w-full p-1 pr-4  bg-[#466] font-bold uppercase text-right">
              submit
            </button>
            </div>
          </form>

        </div>
      )}

      {/* prodile */}
      {isLogged && <h3 className="bg-[#333] p-4 text-2xl ">0x32fewvdsv</h3>}
    </nav>
  );
};

export default NavCmp;

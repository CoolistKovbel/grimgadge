"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const AuthUserModel = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const [currentUser, setCurrerntUser] = useState<any>("");
  const fm = signature;

  const isModalOpen = isOpen && type === "AuthUser";

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const form = e.target as HTMLFormElement;

      // Accessing form elements using the `elements` property
      const nameInput = form.elements.namedItem("name") as HTMLInputElement;
      const nameValue = nameInput.value;

      const message = `You are the current account holder signing today`;
      const signature = await signer.signMessage(message);

      const payload = {
        nameValue,
        signature,
        username: fm,
      };

      // const gg = await login(JSON.stringify(payload));
      console.log(payload);

      router.refresh();


      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const gh = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const address = await signer.getAddress();

      setCurrerntUser(address);
    };

    gh();
  }, []);

  return (
    <section
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >

      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      
      {/* content */}
      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <form onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Sign in</h2>

          <label className="block mb-2">
            <input
              type="text"
              name="name"
              id="name"
              value={currentUser}
              onChange={(e: any) => setCurrerntUser(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Sign
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>

    </section>
  );
};

export default AuthUserModel;

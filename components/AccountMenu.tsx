import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";

type Props = {
  visible?: boolean;
};

const AccountMenu: React.FC<Props> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            src="/images/default-blue.png"
            width={40}
            height={40}
            className="w-8 rounded-md"
            alt="profile"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          className="px-3 text-center text-white text-sm hover:underline"
          onClick={() => signOut()}>
          Sign Out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;

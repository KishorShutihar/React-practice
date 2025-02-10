import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

export const Like = ({ onClick }: { onClick: () => void }) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return (
    <>
      {status ? (
        <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
      ) : (
        <CiHeart size={20} onClick={toggle}></CiHeart>
      )}
    </>
  );
};

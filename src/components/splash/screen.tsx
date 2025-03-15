import { SpinnerOne } from "@mynaui/icons-react";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="flex h-screen w-screen flex-col gap-4 items-center justify-center ">
      <Image
        alt="Charcoin"
        src={"/logo.svg"}
        className="w-64"
        width={376}
        height={115}
      />
      <SpinnerOne className="text-primary w-18 h-18 animate-spin" />
    </div>
  );
};

export { SplashScreen };

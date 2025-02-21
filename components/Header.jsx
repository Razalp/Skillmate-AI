import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/useTheme";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Logo from '../public/Logo.png';
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full shadow-md py-4 px-6 md:px-12 flex items-center justify-between">
     <h1 className="text-3xl font-bold ">
        Skill<span className="font-extrabold">Mate</span>
        <span className="ml-2 text-3xl">AI</span>
      </h1>
      <div className="flex items-center space-x-4">       
        <ModeToggle />
        <SignedOut>
          {/* Remove the outer Button component wrapper */}
          <SignInButton mode="modal">
            <Button>
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
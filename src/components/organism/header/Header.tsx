import { Button } from "@/components/ui/button";
import TopHeader from "./TopHeader";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import MealDropdownMenu from "./MealDropdownMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeaderPropsTypes } from "@/components/types/type";

const Header: React.FC<HeaderPropsTypes> = ({ isOnlyBrandHeader = false }) => {
  return (
    <header className="bg-white border">
      {!isOnlyBrandHeader ? (
        <>
          <TopHeader />
          <div className="container py-5  flex items-center gap-2 ">
            {/* mobile menu */}
            <div className="xl:hidden sm:flex-2">
            <MobileMenu  />
            </div>

            <div className=" items-center   hidden xl:flex flex-2 border gap-[2.5%] 2xl:gap-[4.5%]">
              <MealDropdownMenu
                label="For Dogs"
                dropDownContentTitle="Dog Meals"
                items={[
                  {
                    name: "Beef Bowl",
                    image: "/images/beef-bowl-dog-circle.webp",
                  },
                  {
                    name: "Chicken Bowl",
                    image: "/images/chicken-bowl-dog-circle.webp",
                  },
                  {
                    name: "Lamb Bowl",
                    image: "/images/lamb-bowl-dog-circle.webp",
                  },
                ]}
              />
              <MealDropdownMenu
                label="For Cats"
                dropDownContentTitle="Cat Meals"
                items={[
                  {
                    name: "Beef Bowl",
                    image: "/images/beef-bowl-dog-circle.webp",
                  },
                  {
                    name: "Chicken Bowl",
                    image: "/images/chicken-bowl-dog-circle.webp",
                  },
                  {
                    name: "Lamb Bowl",
                    image: "/images/lamb-bowl-dog-circle.webp",
                  },
                ]}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="outline-none cursor-pointer flex items-center gap-1.5  font-normal ">
                    About Us
                    <div className="w-2.5 h-fit">
                      <Image
                        src="/icons/black-chevron-down.svg"
                        alt="icon"
                        fill
                        className="!static"
                      />
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-fit" align="start">
                  <div className="grid grid-cols-1 gap-5 ">
                    {[
                      "Subscription",
                      "Behind The Scenes",
                      "How to Feed",
                      "Transition Diet",
                    ].map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="flex items-center border  gap-3 cursor-pointer"
                      >
                        <span className="grow border ">{item}</span>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <nav>
                <span className="block">How it works</span>
              </nav>
            </div>

            {/* logo */}
            <div className="w-[14%] mx-[1%]">
              <Image
                src="/icons/logo-primary.svg"
                alt="logo"
                fill
                className="!static"
              />
            </div>

            <div className="items-center justify-end  flex flex-2 border gap-[4.5%]">
              <span className="border hidden xl:block">Blogs</span>
              <span className="border hidden xl:block">Reviews</span>
              <span className="border hidden xl:block">FAQs</span>
              <Button
                variant={"outlinePrimaryBtn"}
                size={"md"}
                className="text-secondary-1 hidden sm:block"
              >
                Get Started
              </Button>
              <Button size={"md"} className=" ">Log In</Button>
            </div>
          </div>
        </>
      ) : (
        <div className=" container py-5 flex relative">
          <div className="w-400px border absolute top-1/2 transform -translate-y-1/2">
            back btn
          </div>
          <div className="w-[14%] mx-auto">
            <Image
              src="/icons/logo-primary.svg"
              alt="logo"
              fill
              className="!static"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

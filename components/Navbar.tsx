import { useToggle } from "@/stores/useToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { FileUp, FolderPlus, Menu, Search, SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Input } from "./ui/input";
import { FieldLabel } from "./ui/field";

const Navbar = () => {
  const router = useRouter();
  const isAdmin: boolean = router.pathname.startsWith("/admin");
  const { toggle } = useToggle();

  return (
    <nav className="bg-purple-950 flex justify-between items-center p-4 sticky top-0 shadow z-50">
      <div className="flex items-center gap-4">
        <Link href="/">
          <img
            className="h-7"
            src="/kla_computer_sidebar.png"
            alt="KLA Computer"
          />
        </Link>
      </div>
      <div>
        <Button className="bg-yellow-500 hover:bg-white hover:text-black">
          Install Standard Apps
        </Button>
      </div>
      {/* <div>
        <InputGroup>
          <InputGroupInput
            className="w-xs text-white"
            id="inline-start-input"
            placeholder="Search..."
          />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </div> */}
      <div className="flex items-center gap-4">
        <Search color="white" className="cursor-pointer" size={26} />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="bg-white text-purple-950"
              >
                <Menu />
              </Button>
            }
          />
          <DropdownMenuContent>
            <DropdownMenuItem>
              <form onSubmit={() => null}>
                <FieldLabel className="flex items-center gap-1.5">
                  <Input type="file" hidden />
                  <FileUp />
                  Upload File
                </FieldLabel>
              </form>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              <FolderPlus />
              New Folder
            </DropdownMenuItem> */}
            <DropdownMenuItem>
              <SettingsIcon />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

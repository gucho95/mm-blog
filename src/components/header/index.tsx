import Image from "../image";
import SearchInput from "../input/searchInput";
import Link from "../link";
import AuthedMenu from "./authedMenu";
import classes from "./header.module.css";
import PublicMenu from "./publicMenu";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="flex">
        <Link href="/">
          <Image src="./logo.svg" width={150} height={34} alt="brand logo" />
        </Link>
        <SearchInput containerClassName="ml-10" placeholder="Search..." />
      </div>

      {/* <PublicMenu /> */}
      <AuthedMenu />
    </header>
  );
};

export default Header;

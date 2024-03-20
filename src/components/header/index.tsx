import Image from "../image";
import SearchInput from "../input/searchInput";
import Link from "../link";
import classes from "./header.module.css";
import Menu from "./menu";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="flex">
        <Link href="/">
          <Image
            src="./logo.svg"
            width={150}
            height={34}
            alt="brand logo"
            priority
          />
        </Link>
        <SearchInput containerClassName="ml-10" placeholder="Search..." />
      </div>
      <Menu />
    </header>
  );
};

export default Header;

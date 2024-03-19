import { ReactNode, forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
}

type Ref = HTMLAnchorElement;

const Link = forwardRef<Ref, LinkProps>((props, ref) => (
  <NextLink ref={ref} {...props} />
));

Link.displayName = "Link";

export default Link;

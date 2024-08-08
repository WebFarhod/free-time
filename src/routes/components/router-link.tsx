import { Ref, forwardRef } from "react";
import { Link } from "react-router-dom";

interface IProps {
  href: string;
}

const RouterLink = forwardRef(
  ({ href, ...other }: IProps, ref: Ref<HTMLAnchorElement>) => (
    <Link ref={ref} to={href} {...other} />
  )
);

export default RouterLink;

import { Link, LinkProps, NavLinkProps } from 'react-router-dom'

export type NavLinkProp = LinkProps

export function NavLink(props: NavLinkProps) {
  return <Link className="flex" {...props} />
}

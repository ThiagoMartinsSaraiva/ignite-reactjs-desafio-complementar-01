interface SideBarProps {
  children: any
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      { props.children }
    </nav>  
  )
}
function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
     {Icon && <Icon className="sidebar-option-icon" />}
     {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption
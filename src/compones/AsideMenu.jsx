import SideMenuC from "./SideMenuC.jsx";

const AsideMenu = () => {
  return(
      <nav>
        <div>
          <ul className="flex flex-col gap-4 m-4">
             <SideMenuC nombre="Home"/>
              <SideMenuC nombre="Home"/>
              <SideMenuC nombre="Home"/>
              <SideMenuC nombre="Home"/>
              <SideMenuC nombre="Home"/>
          </ul>
        </div>
      </nav>
  )
}

export default AsideMenu;
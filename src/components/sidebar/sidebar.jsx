import { Link, useLocation } from "react-router-dom";
import "./sidebar.css"

const sidebarNavLinks = [
  "Producto",
  "SubirProducto",
  "Provedor",
  "SubirProvedor",
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside className={"sidebar"}>
        <div className={"sidebarContent"}>
          <div className={"profileDetails"}>
          </div>

          <nav className={"sidebarNav"}>
            <ul>
              {sidebarNavLinks?.map((sidebarNavLink) => (
                <li className={"sidebarNavItem"} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? "sidebarNavLinkActive"
                        : "sidebarNavLink"
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

import { Link, useLocation } from "react-router-dom";
import "./sidebar.css"

const sidebarNavLinks = [
  "dashboard",
  "expenses",
  "wallets",
  "summary",
  "accounts",
  "settings",
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside className={"sidebar"}>
        <div className={"sidebarContent"}>
          <div className={"profileDetails"}>
            <div className={"profileImageDiv"}>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_12hftSnDEZ1amgwEqW7UPal058eM8nHQMg&usqp=CAU"} alt="samantha" />
              <p className={"notifications"}>4</p>
            </div>
            <p className={"userName"}>Samantha</p>
            <p className={"userEmail"}>samantha@email.com</p>
          </div>

          <nav className={"sidebarNav"}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
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

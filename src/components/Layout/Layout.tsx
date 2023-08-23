import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Nav />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout

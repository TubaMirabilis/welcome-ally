import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="container-sm">
        <Header />
        { children }
        <Footer />
    </div>
  )
}

export default Layout
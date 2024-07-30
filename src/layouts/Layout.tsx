import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Modal from "../components/Modal"

function Layout() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal />
      <ToastContainer />
    </>
  )
}

export default Layout
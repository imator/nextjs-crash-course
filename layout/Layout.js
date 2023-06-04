import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Fragment } from "react";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;

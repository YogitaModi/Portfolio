import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const Layout = ({ children, author }) => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={author} />
      </Helmet>
      <Header />

      <main style={{ minHeight: "50vh" }}>{children}</main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  author: "Yogita Modi",
};

export default Layout;

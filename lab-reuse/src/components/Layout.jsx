import React from "react";

const layoutStyle = {
  display: "grid",
  gridTemplateAreas: `
    "header header"
    "sidebar main"
    "footer footer"
  `,
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "250px 1fr",
  minHeight: "100vh",
};

const headerStyle = {
  gridArea: "header",
  backgroundColor: "#f5f5f5",
  padding: "10px",
  textAlign: "center",
};

const sidebarStyle = {
  gridArea: "sidebar",
  backgroundColor: "#e8e8e8",
  padding: "10px",
};

const mainStyle = {
  gridArea: "main",
  padding: "10px",
};

const footerStyle = {
  gridArea: "footer",
  backgroundColor: "#f5f5f5",
  padding: "10px",
  textAlign: "center",
};

function Layout({children}) {
  return (
    <div style={layoutStyle}>
      {children}
    </div>
  );
}

export default Layout;
export {headerStyle, sidebarStyle, mainStyle, footerStyle};
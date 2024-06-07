import Header from "./header/Header";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";

const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default PageTemplate;

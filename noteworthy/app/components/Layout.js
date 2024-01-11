import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
      <div>
          <header>
              {/* You can add header elements here */}
              <Nav />
          </header>

          <main>
              {children}
          </main>

          <footer>
              {/* You can add footer elements here */}
          </footer>
      </div>
  );
};

export default Layout;

// imports
import { Container } from "react-bootstrap";
import { Outlet } from 'react-router-dom'
// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
};

export default App;

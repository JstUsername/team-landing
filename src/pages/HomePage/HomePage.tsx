import Header from '../../components/Header/Header.tsx';
import Knowledge from '../../components/Knowledge/Knowledge';
import Partners from '../../components/Partners/Partners.tsx';
import Footer from '../../components/Footer/Footer.tsx';

function HomePage() {
  return (
    <div className="AppContent">
      <Header />
      <Knowledge />
      <Partners />
      <Footer />
    </div>
  );
}

export default HomePage;

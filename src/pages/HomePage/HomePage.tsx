import Header from '../../components/Header/Header.tsx';
import Articles from '../../components/Articles/Articles';
import Knowledge from '../../components/Knowledge/Knowledge';
import MedicalInformation from '../../components/MedicalInformation/MedicalInformation';
import FAQComponent from '../../components/FAQ/FAQ.tsx';
import PriceList from '../../components/PriceList/PriceList.tsx';
import PartnerForm from '../../components/PartnerForm/PartnerForm.tsx';
import Partners from '../../components/Partners/Partners.tsx';
import Footer from '../../components/Footer/Footer.tsx';

function HomePage() {
  return (
    <div className={"AppContent"}>
      <Header />
      <Articles />
      <MedicalInformation />
      <Knowledge />
      <FAQComponent />
      <PriceList />
      <PartnerForm />
      <Partners />
      <Footer />
    </div>
  );
}

export default HomePage;

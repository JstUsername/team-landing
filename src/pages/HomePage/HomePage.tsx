import Articles from '../../components/Articles/Articles';
import Knowledge from '../../components/Knowledge/Knowledge';
import MedicalInformation from '../../components/MedicalInformation/MedicalInformation';
import FAQComponent from '../../components/FAQ/FAQ.tsx';
import PriceList from '../../components/PriceList/PriceList.tsx';

function HomePage() {
  return (
    <div className="AppContent">
      <Articles />
      <MedicalInformation />
      <Knowledge />
      <FAQComponent />
      <PriceList />
    </div>
  );
}

export default HomePage;

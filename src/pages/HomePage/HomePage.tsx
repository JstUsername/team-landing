import Articles from '../../components/Articles/Articles';
import Knowledge from '../../components/Knowledge/Knowledge';
import FAQComponent from '../../components/FAQ/FAQ.tsx';
import PriceList from '../../components/PriceList/PriceList.tsx';

function HomePage() {
  return (
    <div className="AppContent">
      <Articles />
      <Knowledge />
      <FAQComponent />
      <PriceList />
    </div>
  );
}

export default HomePage;

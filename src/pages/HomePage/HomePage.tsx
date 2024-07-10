import Articles from '../../components/Articles/Articles';
import Knowledge from '../../components/Knowledge/Knowledge';
import FAQComponent from '../../components/FAQ/FAQ.tsx';

function HomePage() {
  return (
    <div className="AppContent">
      <Articles />
      <Knowledge />
      <FAQComponent />
    </div>
  );
}

export default HomePage;

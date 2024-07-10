import Knowledge from '../../components/Knowledge/Knowledge';
import MedicalInformation from '../../components/MedicalInformation/MedicalInformation';

function HomePage() {
  return (
    <div className="AppContent">
      <MedicalInformation />
      <Knowledge />
    </div>
  );
}

export default HomePage;

import ResumeConfig from './config/resume-config.json';
import DefaultScreenView from './screens/DefaultScreenView';

export default function App() {
  const isResumeConfigured = ResumeConfig.length > 0 ? true : false;
  return (
    <div className="app">
      <DefaultScreenView />
    </div>
  )
}
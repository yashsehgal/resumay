import React, { useEffect, useState } from 'react';
import ResumeConfig from './config/resume-config.json';
import DefaultScreenView from './screens/DefaultScreenView';
import ResumeLayout from './screens/ResumeLayout';

export default function App() {
  const [isResumeConfigured, setResumeConfigured] = useState(ResumeConfig.length > 0 ? true : false);
  useEffect(() => {
    setResumeConfigured(ResumeConfig.length > 0 ? true : false);
  }, [ResumeConfig]);
  return (
    <div className="app m-16">
      {isResumeConfigured ? <ResumeLayout data={ResumeConfig[0]} /> : <DefaultScreenView />}
    </div>
  )
}
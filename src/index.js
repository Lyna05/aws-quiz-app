import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

createRoot(document.getElementById('root')).render(<App />);

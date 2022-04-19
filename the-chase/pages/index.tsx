import type { NextPage } from 'next';
import * as service from '../lib/firebase/fbs-db-services';

import SettingsForm from '../components/game-settings-form/settings-form';

const Home: NextPage = () => {
  return (
      <>
        <SettingsForm/>
      </>
  )
}

export default Home

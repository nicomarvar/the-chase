import type { NextPage } from 'next';
import * as service from '../lib/firebase/fbs-db-services';

import SettingsForm from '../components/game-settings-form/settings-form';

const Home: NextPage = () => {
  return (
      <>
        <button onClick={() => {service.createDocumentinCollection("games",{country: "England", name: "London"})}}>
         TEST FETCH
        </button>
        <SettingsForm></SettingsForm>
      </>
  )
}

export default Home

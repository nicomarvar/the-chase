import type { NextPage } from 'next';
import * as service from '../lib/firebase/fbs-db-services';

const Home: NextPage = () => {
  return (
      <>
        <button onClick={() => {service.createDocumentinCollection("games",{country: "England", name: "London"})}}>
         TEST FETCH
        </button>
      </>
  )
}

export default Home

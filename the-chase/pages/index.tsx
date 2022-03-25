import type { NextPage } from 'next';
import { getTest } from '../lib/firebase/fbs-db-services';

const Home: NextPage = () => {
  return (
      <>
        <button onClick={getTest}>
         TEST FETCH
        </button>
      </>
  )
}

export default Home

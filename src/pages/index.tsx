import Head from 'next/head'

import { Dashboard } from '../components/Dashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>pdv</title>
      </Head>
      <Dashboard />
    </>
  )
}

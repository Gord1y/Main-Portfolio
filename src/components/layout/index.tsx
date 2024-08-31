import { PropsWithChildren } from 'react'

import Footer from './footer'
import Header from './header'

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container pt-20'>{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout

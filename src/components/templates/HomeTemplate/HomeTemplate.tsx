import Header from '../../organisms/Header/Header'
import Banner from '../../organisms/Banner/Banner'

/** Template: page layout — header on top, banner below. */
function HomeTemplate() {
  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
    </>
  )
}

export default HomeTemplate

import HeaderMain from './components/HeaderMain';
import FooterMain from './components/FooterMain';
import SectionMain from './components/SectionMain';
import SectionCourses from './components/SectionCourses';

export default function App() {

  return (
    <>
      <HeaderMain />
      <main>
        <SectionMain />
        <SectionCourses />
      </main>
      <FooterMain />
    </>
  )
}

import '../Styles/main.css';

import ReviewsGet from './ReviewsGet';
import SectionOne from './Section-1';
import SectionTwo from './Section-2';
import MentorsGet from './MentorsGet';
import SectionFour from './Section-4';
import SectionFive from './Section-5';
import WriteUs from './writeToUs';

const section = () => {
  return (
    <main className="section">
      <SectionOne />
      <SectionTwo />
      <MentorsGet />
      <SectionFour />
      <SectionFive />
      <ReviewsGet />
      <WriteUs />
    </main>
   );
}

export default section;

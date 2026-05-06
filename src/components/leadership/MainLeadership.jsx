import React from 'react';
import LeadershipHero from './LeadershipHero';
import FacultyMentors from './FacultyMentors';
import LeadershipMessage from './LeadershipMessage';

export default function MainLeadership({ leadershipPageData }) {
  const content = leadershipPageData?.content || {};

  return (
    <>
      <LeadershipHero hero={content.hero} />
      <LeadershipMessage leadershipEdge={content.leadershipEdge} />
      <FacultyMentors facultyMentors={content.facultyMentors} />
    </>
  );
}

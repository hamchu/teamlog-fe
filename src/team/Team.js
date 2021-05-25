import { React, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamHeader from './TeamHeader';
import TeamMain from './TeamMain';
import TeamProject from './TeamProject';
import TeamMember from './TeamMember';
import TeamFollower from './TeamFollower';
import TeamManagement from './TeamManagement';

export default function Team() {
  const sections = [
    { title: '홈', url: '', component: TeamMain },
    { title: '프로젝트', url: '/project', component: TeamProject },
    { title: '멤버', url: '/member', component: TeamMember },
    { title: '팔로워', url: '/follower', component: TeamFollower },
  ];

  const [relation, setRelation] = useState(null);

  return (
    <>
      <TeamHeader sections={sections} updateRelation={setRelation} />

      <Switch>
        {sections.map((section, index) => (
          <Route
            key={index}
            exact
            path={`/teams/:id${section.url}`}
            component={() => (
              <section.component relation={relation} />
            )}
          />
        ))}
        <Route exact path="/teams/:id/teammanagement" component={() => <TeamManagement relation={relation} />} />
      </Switch>
    </>
  );
}
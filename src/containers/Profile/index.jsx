import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Profile from '@components/Profile';

const query = graphql`
  {
    site {
      siteMetadata {
        profile {
          image
          name
          description
        }
      }
    }
  }
`;

function ProfileContainer(props) {
  const {
    site: {
      siteMetadata: { profile },
    },
  } = useStaticQuery(query);
  return (
    <Profile
      image={profile.image}
      name={profile.name}
      description={profile.description}
    />
  );
}

export default ProfileContainer;

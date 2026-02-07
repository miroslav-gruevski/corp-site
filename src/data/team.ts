export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Matt Evans',
    role: 'Managing Director',
    bio: 'Leading ECS with a passion for providing excellent security solutions and service. Matt brings strategic vision and decades of industry experience to ensure ECS continues to grow as a market leader.',
    initials: 'ME',
    image: '/images/team/matt-evans.jpg',
  },
  {
    name: 'Dan Cope',
    role: 'Director',
    bio: 'Driving innovation and quality across all ECS operations and services. Dan oversees the technical direction of the company and ensures every project meets the highest standards.',
    initials: 'DC',
    image: '/images/team/dan-cope.jpg',
  },
  {
    name: 'Karen Evans',
    role: 'HR Manager',
    bio: 'Building and nurturing our talented team of security professionals. Karen ensures ECS attracts and retains the best talent in the industry through our focused recruitment programme.',
    initials: 'KE',
    image: '/images/team/karen-evans.jpg',
  },
  {
    name: 'Darren Ross',
    role: 'Project Manager',
    bio: 'Ensuring smooth project delivery from consultation to completion. Darren coordinates our engineering teams and manages complex installations across residential, education, and commercial sites.',
    initials: 'DR',
    image: '/images/team/darren-ross.jpg',
  },
  {
    name: 'Barry Whittick',
    role: 'Installation Manager',
    bio: 'Overseeing our expert installation team with precision and care. Barry ensures every system is installed to the highest standard, meeting all relevant British Standards and regulations.',
    initials: 'BW',
    image: '/images/team/barry-whittick.jpg',
  },
  {
    name: 'Matt Barlow',
    role: 'Service Manager',
    bio: 'Managing 24/7 maintenance and aftercare support for all clients. Matt leads our dedicated service team to ensure rapid response times and reliable ongoing system performance.',
    initials: 'MB',
    image: '/images/team/matt-barlow.jpg',
  },
];

import kenyonLogo from '../assets/kcshield_3cu_lg-2.png'
import columbiaLogo from '../assets/Columbia_University_shield.svg.png'
import flatironLogo from '../assets/flatironschool-logo.png'

export default {
  experience: [
    {
      position: 'Web Developer',
      company: 'Euclid Technology',
      location: 'Bethesda, MD',
      period: {
        start: 'January 2019',
        end: 'Present',
      },
    },
    {
      position: 'Bicycle Courier',
      company: 'UrbanStems',
      location: 'Washington, DC',
      period: {
        start: 'January 2014',
        end: 'Present',
      },
    },
    {
      position: 'RE Development Consultant',
      company: 'Self',
      location: 'Washington, DC',
      period: {
        start: 'March 2015',
        end: 'March 2018',
      },
    },
    {
      position: 'Operations Director',
      company: 'Collective Group',
      location: 'Washington, DC',
      period: {
        start: 'March 2013',
        end: 'March 2015',
      },
    },
  ],
  education: [
    { institution: 'Flatiron School', location: 'Washington, DC', period: {start: "April 2018", end: "August 2018"}, logo: flatironLogo },
    { institution: 'Columbia University', location: 'New York, NY', period: {start: "August 2007", end: "August 2009"}, logo: columbiaLogo },
    { institution: 'Kenyon College', location: 'Gambier, OH', period: {start: "August 2004", end: "January 2006"}, logo: kenyonLogo },
  ],
}

import concertplanbg from '../assets/concertplanbg.jpg'
import osloadmobg from '../assets/osloadmobg.jpeg'
import messtelbg from '../assets/messtelbg.png'
import caZoom from '../assets/cazoom.png'
import lrCard from '../assets/lrcard.png'
import d3Booth from '../assets/d3booth.png'
import memberDashboard from '../assets/memberdashboard.png'
import checkout from '../assets/checkout.png'
import threeCountries from '../assets/three-countries-validate.png'

export default [
  {
    url: 'http://www.lucaseckman.com/concertplan',
    title: 'ConcertPlan',
    content:
      'View live concert data. Start plans with your friends to attend concerts.',
    image: concertplanbg,
    technologies: [
      'Fetches live concert data from the Ticketmaster API',
      'React and Redux on the front end and Ruby on Rails on the back end.',
      'User authentication with JWT and bcrypt.',
    ],
    github: 'https://github.com/eckmLJE/concertplanfeature',
    link: 'https://romantic-shirley-335ba8.netlify.com/',
  },
  {
    url: 'http://www.lucaseckman.com/messtel',
    title: 'Messtel',
    content:
      'DC couriers share delivery intelligence on this Mapbox enabled discussion app.',
    image: messtelbg,
    technologies: [
      'React, Redux, Ruby on Rails.',
      'Employs Mapbox GL and Geocoding to return address searches.',
      'Concept arose from real need among bicycle couriers.',
    ],
    github: 'https://github.com/eckmLJE/messtel',
    link: 'https://serene-mestorf-ac02ac.netlify.com/',
  },
  {
    url: 'https://d3-booths.netlify.com/',
    title: 'd3 Booth Floorplan',
    content: 'View a zoom-and-pan enabled event floor plan. ',
    image: d3Booth,
    technologies: ['Floor plan generated with D3.js.'],
    github: 'https://github.com/eckmLJE/d3jslearn',
    link: 'https://d3-booths.netlify.com/',
  },
  {
    url: 'https://create-account-stepper.netlify.com/',
    title: 'CreateAccount',
    content: 'Create Account stepper with validations and masking.',
    image: caZoom,
    technologies: [
      'jQuery, Boostrap, Material Design Bootstrap theme. ',
      'HTML5 validations, and cleave.js for masking. ',
    ],
    github: 'https://github.com/eckmLJE/euclid-create-account',
    link: 'https://create-account-stepper.netlify.com/',
  },
  {
    url: 'https://line-lift-card.netlify.com/',
    title: 'Line Lift Card',
    content:
      'A card with borders that cut the card from the surface of the screen. The card appears to rise.',
    image: lrCard,
    technologies: ['Vanilla CSS.'],
    github: 'https://github.com/eckmLJE/animated-borders',
    link: 'https://line-lift-card.netlify.com/',
  },
  {
    url: 'http://www.lucaseckman.com/roomseek',
    title: 'RoomSeek',
    content:
      'Set rent, move date, and pet filters to view available bedrooms across several apartments. ',
    image: osloadmobg,
    technologies: [
      'React and Redux.',
      'Floor plans and staging furniture are generated in SVG dynamically from stored dimensions.',
    ],
    github: 'https://github.com/eckmLJE/room-seek-v2-fe/tree/prevdepl',
    link: 'https://loving-villani-fa1b1b.netlify.com/',
  },
  {
    url: 'https://member-dashboard-mdb.netlify.com/',
    title: 'Member Dashboard',
    content: 'View your member data on a clean, responsive dashboard.',
    image: memberDashboard,
    technologies: ['jQuery, Bootstrap.'],
    github: 'https://github.com/eckmLJE/euclid-mobile-profile-cards',
    link: 'https://member-dashboard-mdb.netlify.com/',
  },
  {
    url: 'https://material-checkout.netlify.com/',
    title: 'Checkout Stepper',
    content: 'Prototype with working validation and masking.',
    image: checkout,
    technologies: [
      'jQuery, Bootstrap.',
      'cleave.js for validations and credit card type checking.',
    ],
    github: 'https://github.com/eckmLJE/euclid-checkout-template',
    link: 'https://material-checkout.netlify.com/',
  },
  {
    url: 'https://validating-three-countries.netlify.com/',
    title: 'Validating Country Tel and ZIP',
    content:
      'Experimenting with using cleave.js in conjunction with HTML5 validation.',
    image: threeCountries,
    technologies: [
      'jQuery, Bootstrap.',
      'cleave.js for validations and credit card type checking.',
    ],
    github: 'https://github.com/eckmLJE/form-masking-example',
    link: 'https://validating-three-countries.netlify.com/',
  },
]

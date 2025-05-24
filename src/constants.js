const profileFields = [
    'firstName', 
    'lastName', 
    'email', 
    'phone', 
    'website'
]

const jobFields = [
    'jobTitle',
    'company',
    'yearFrom',
    'yearTo',
    'description'
]

const educationFields = [
    'degree',
    'school',
    'yearFrom',
    'yearTo'
]

const personalDetailFields = [
  'phone',
  'email',
  'location'
]

const nameFields = [
  'firstName',
  'lastName',
  'jobTitle'
]


export const LABEL_CONFIG = {
    firstName: 'First Name',
    lastName: 'Last Name',
    
    jobTitle: 'Job Title',
    company: 'Company',
    yearFrom: 'Start Year',
    yearTo: 'End Year',
    description: 'Description',

    degree: 'Degree',
    school: 'School',
    yearFrom: 'Year From',
    yearTo: 'Year To',
    
    phone: 'Phone',
    email: 'Email',
    location: 'Location'
}

export const EXPERIENCE_CONFIG = [{
    key: 1,
    jobTitle: "UI/UX Engineer",
    company: "dv01",
    yearFrom: 2016,
    yearTo: 2020,
    description: [
      { 
        key: 1, 
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        key: 2,
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }

    ]
  },
  {
    key: 2,
    jobTitle: "Information Manager/ Data Visualization Specialist",
    company: "Earth Insitute, Columbia University",
    yearFrom: 2015,
    yearTo: 2016,
    description: [
      { 
        key: 1, 
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        key: 2,
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }

    ]  },
  {
    key: 3,
    jobTitle: "Data Visualisation Specialist",
    company: "United Nations",
    yearFrom: 2013,
    yearTo: 2015,
    description: [
      { 
        key: 1, 
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        key: 2,
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }

    ]
  },
  {
    key: 4,
    jobTitle: "Innovation Fellow",
    company: "EdLab, Teachers College Columbia University",
    yearFrom: 2012,
    yearTo: 2013,
    description: [
      { 
        key: 1, 
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        key: 2,
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }

    ]
  },
  {
    key: 5,
    jobTitle: "Data Visualization Designer",
    company: "Cooler Solutions, Toronto, Canada",
    yearFrom: 2011,
    yearTo: 2012,
    description: [
      { 
        key: 1, 
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        key: 2,
        bullet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }

    ]
  },

]

export const EDUCATION_CONFIG = [
    {
      key: 1,
      degree: 'MScBMC',
      school: 'University of Toronto',
      yearFrom: 2009,
      yearTo: 2011
    },
    {
      key: 2,
      degree: 'BHSc',
      school: 'McMaster University',
      yearFrom: 2005,
      yearTo: 2009
    }
  ]

export const SKILLS_CONFIG = [
  {
    key: 1,
    skill: 'React'
  },
  {
    key: 2,
    skill: 'Javascript'
  },
  {
    key: 3,
    skill: 'HTML'
  },
  {
    key: 4,
    skill: 'CSS'
  },
  {
    key: 5,
    skill: 'Data Visualization'
  },
  {
    key: 6,
    skill: 'Adobe Creative'
  }
]

export const PERSONAL_DETAILS_CONFIG = {
  phone: '(917)524-8785',
  email: 'janicesunjoo@gmail.com',
  location: 'NJ, NY, Remote'
}
export const NAME_CONFIG = {
  firstName: 'Janice',
  lastName: 'Leng',
  jobTitle: 'UI/UX Engineer'
}
export const PROFILE_CONFIG = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export { profileFields, jobFields, educationFields, personalDetailFields, nameFields }
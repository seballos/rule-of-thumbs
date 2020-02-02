import React, { Fragment } from 'react'
import Hero from '../../components/Hero/Hero'

import './Home.scss'
import Message from '../../components/Message'
import Trials from '../../components/Trials/Trials'

const messageProps = {
  title: 'Speak out. Be Heard.',
  strongTitle: 'Be counted',
  description: 'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.'
}

const trialsProps = {
  model: [{
    name: 'Kanye West',
    trialDate: '01-01-2020',
    category: 'Entretaiment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    bgImage: '/public/images/kanye.jpg',
    stats: {
      thumbsUp: 64,
      thumbsDown: 36,
    }
  }, {
    name: 'Mark Zuckerberg',
    trialDate: '01-01-2020',
    category: 'Business',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    bgImage: '/public/images/mark.jpg',
    stats: {
      thumbsUp: 36,
      thumbsDown: 64,
    }
  }, {
    name: 'Cristina Fernández de Kirchner',
    trialDate: '01-01-2020',
    category: 'Politics',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    bgImage: '/public/images/cristina.jpg',
    stats: {
      thumbsUp: 36,
      thumbsDown: 64,
    }
  }, {
    name: 'Malala Yousafzai',
    trialDate: '01-01-2020',
    category: 'Entretaiment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    bgImage: '/public/images/malala.jpg',
    stats: {
      thumbsUp: 64,
      thumbsDown: 36,
    }
  }]
}

const Home = () => (
  <Fragment>
    <Hero />
    <div className="home__previous-trials">
      <Message {...messageProps} />
      <Trials {...trialsProps} />
    </div>
  </Fragment>
)

export default Home

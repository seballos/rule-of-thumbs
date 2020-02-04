import React, { Fragment, useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'

import './Home.scss'
import Message from '../../components/Message'
import Trials from '../../components/Trials/Trials'
import Footer from '../../components/Footer'
import { getTrials } from '../../services/trials'

const messageProps = {
  title: 'Speak out. Be Heard.',
  strongTitle: 'Be counted',
  description: 'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.'
}

const Home = () => {
  const [mainTrial, setMainTrial] = useState({})
  const [previousTrials, setPreviousTrials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTrials().then(data => {
      const activeTrial = data.find(item => item.active)
      const trials = data.filter(item => !item.active)
      setMainTrial(activeTrial)
      setPreviousTrials(trials)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <div>...Loading</div>
  }

  return (
    <Fragment>
      <Hero {...mainTrial} />
      <div className="home__previous-trials">
        <Message {...messageProps} />
        <Trials model={previousTrials} />
        <Footer />
      </div>
    </Fragment>
  )
}

export default Home

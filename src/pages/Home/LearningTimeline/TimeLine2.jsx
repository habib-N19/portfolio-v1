import { useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'

const TimeLine2 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])
  return (
    <div>
      <VerticalTimeline>
        {data.map(element => (
          <VerticalTimelineElement
            key={element.projectName}
            className='vertical-timeline-element--work'
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={element.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className='vertical-timeline-element-title'>
                {element.title}
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                {element.subtitle}
              </h4>
              <p>{element.description}</p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine2

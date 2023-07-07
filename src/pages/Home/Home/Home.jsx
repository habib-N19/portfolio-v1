import Featured from '../Featured/Featured'
import Hero from '../Hero/Hero'
import ProjectRepo from '../ProjectRepo/ProjectRepo'
// import TimeLine2 from '../LearningTimeline/TimeLine2'
// import TimeLine3 from '../LearningTimeline/TimeLine3'
// import TimeLine from '../LearningTimeline/TimeLine'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      {/* <TimeLine /> */}
      <Featured></Featured>
      <ProjectRepo></ProjectRepo>
      {/* <TimeLine3 /> */}
    </>
  )
}

export default Home

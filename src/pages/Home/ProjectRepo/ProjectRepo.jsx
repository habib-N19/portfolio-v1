import { filterProps } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DiGithubBadge } from 'react-icons/di'
const ProjectRepo = () => {
  const [repo, setRepo] = useState([])
  const selectedRepos = [
    645789699, 645789123, 657323387, 645785686, 639837536, 658441758
  ]
  useEffect(() => {
    fetch('https://api.github.com/users/habib-N19/repos')
      .then(res => res.json())
      .then(data => {
        const filteredRepo = data.filter(projects =>
          selectedRepos.includes(projects.id)
        )
        console.log(filterProps)
        setRepo(filteredRepo)
        console.log(repo)
      })
  }, [])
  const handleRedirect = url => {
    window.open(url, '_blank')
  }
  return (
    <section className='grid w-11/12 h-screen grid-cols-3 gap-6 mx-auto'>
      <h2 className='my-8 text-3xl font-semibold text-center col-span-full'>
        All Projects
      </h2>
      {repo.map(project => (
        <div
          onClick={() => {
            handleRedirect(project.html_url)
          }}
          className='border cursor-pointer hover:scale-105 transition-all p-4 shadow-md rounded border-[#373c3e]'
          key={project.id}
        >
          <h2 className='flex items-center p-0 m-0 font-semibold text-center text-cyan-400'>
            <span className='p-0 m-0 text-center'>
              <DiGithubBadge />
            </span>
            <a href={project.html_url} target='_blank' rel='noreferrer'></a>

            {project.name}
          </h2>
          <p>
            {project.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Corporis cumque eaque sapiente magnam saepe harum
            ducimus suscipit blanditiis nisi ex?{' '}
          </p>
          <div className='relative bottom-0 inline-flex items-center'>
            {project.language === 'JavaScript' && (
              <div className='w-4 h-4 rounded-full bg-[#f1e05a]'></div>
            )}
            {project.language === 'TypeScript' && (
              <div className='w-4 h-4 rounded-full bg-[#2b7489]'></div>
            )}
            {project.language}
          </div>
        </div>
      ))}
      <a href='https://github.com/habib-N19?tab=repositories'>See More</a>
    </section>
  )
}

export default ProjectRepo

import resume from '/resume.pdf'
import image from '../../../assets/temp.jpg'

const Hero = () => {
  return (
    <header className='grid w-11/12 min-h-[400px] grid-cols-1 gap-8 mt-10 mx-auto  md:grid-cols-2'>
      <section className='col-span-1 space-y-3 text-xl'>
        <span className='text-3xl font-bold'>
          {' '}
          Hello <br /> My Name is Habib
        </span>
        <p>I am a frontend Developer,</p>
        <p>
          adipisicing elit. Reprehenderit dignissimos quae repellat nemo natus
          neque laudantium exercitationem aliquam laboriosam! Culpa?
        </p>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime,
          facilis ullam nihil ratione iusto.
        </p>
        {/* TODO:adding two buttons for downloading resume and texting me via email/other relevant medium  */}

        <a
          className='block mt-6 text-white underline'
          href={resume}
          download={true}
        >
          Get My Resume
        </a>
      </section>
      <section>
        <figure className='max-w-[350px] rounded-xl'>
          <img src={image} alt='' className='w-full rounded-xl' />
        </figure>
      </section>
    </header>
  )
}

export default Hero

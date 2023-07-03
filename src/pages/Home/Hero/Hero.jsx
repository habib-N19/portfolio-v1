import resume from '/resume.pdf'
const Hero = () => {
  return (
    <header className='grid w-11/12 min-h-[400px] grid-cols-1 gap-3 mx-auto border md:grid-cols-2'>
      <section className='col-span-1 text-center'>
        Hello My Name is Habib and I am a frontend Developer
        {/* TODO:adding two buttons for downloading resume and texting me via email/other relevant medium  */}
        <button className='btn'>
          <a href={resume} download={true}>
            Download Resume
          </a>
        </button>
      </section>
      <section>Here will be my image </section>
    </header>
  )
}

export default Hero

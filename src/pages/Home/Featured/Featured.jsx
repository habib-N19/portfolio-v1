import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { AutoPlay, Perspective } from '@egjs/flicking-plugins'
import img1 from '../../../assets/temp-1.jpg'
import img2 from '../../../assets/temp-2.jpg'
import img3 from '../../../assets/temp-3.jpg'
import img4 from '../../../assets/temp-4.jpg'
const Featured = () => {
  const plugins = [
    new Perspective({ rotate: 0.2 }),
    new AutoPlay({
      duration: 2500,
      direction: 'NEXT',
      stopOnHover: true
    })
  ]

  return (
    <section className='w-9/12 min-h-screen mx-auto mb-16'>
      <h1 className='px-4 mb-12 text-4xl font-semibold text-center'>
        Featured Work
      </h1>
      <Flicking className='max-h-fit' plugins={plugins} circular={true}>
        <div className='card-panel '>
          <div className='shadow-xl h-fit card w-96 bg-base-100'>
            <figure>
              <img src={img1} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Project Name
                <div className='py-1 bg-orange-500 badge badge-secondary hover:text-blue-300 hover:bg-opacity-75'>
                  View The Repository
                </div>
              </h2>
              <p>
                Project description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Enim deserunt suscipit asperiores
                necessitatibus tempore nesciunt voluptates voluptas error?
                Tempore sequi officia eaque repudiandae? Odio, vero vel error
                dolore sint doloremque?
              </p>
              <div className='items-center justify-end card-actions'>
                <p className='text-xl font-semibold text-blue-400 underline'>
                  Technology Used
                </p>
                <div className='badge badge-outline'>React</div>
                <div className='badge badge-outline'>Express</div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-panel'>
          <div className='h-full transition-all shadow-xl hover:scale-105 hover:outline-1 hover:outline-stone-300 card w-96 bg-base-100'>
            <figure>
              <img src={img2} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Project Name
                <div className='py-1 bg-orange-500 badge badge-secondary hover:text-blue-300 hover:bg-opacity-75'>
                  View The Repository
                </div>
              </h2>
              <p>
                Project description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Enim deserunt suscipit asperiores
                necessitatibus tempore nesciunt voluptates voluptas error?
                Tempore sequi officia eaque repudiandae? Odio, vero vel error
                dolore sint doloremque?
              </p>
              <div className='items-center justify-end card-actions'>
                <p className='text-xl font-semibold text-blue-400 underline'>
                  Technology Used
                </p>
                <div className='badge badge-outline'>React</div>
                <div className='badge badge-outline'>Express</div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-panel '>
          <div className='h-full transition-all shadow-xl hover:scale-105 hover:outline-1 hover:outline-stone-300 card w-96 bg-base-100'>
            <figure>
              <img src={img3} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Project Name
                <div className='py-1 bg-orange-500 badge badge-secondary hover:text-blue-300 hover:bg-opacity-75'>
                  View The Repository
                </div>
              </h2>
              <p>
                Project description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Enim deserunt suscipit asperiores
                necessitatibus tempore nesciunt voluptates voluptas error?
                Tempore sequi officia eaque repudiandae? Odio, vero vel error
                dolore sint doloremque?
              </p>
              <div className='items-center justify-end card-actions'>
                <p className='text-xl font-semibold text-blue-400 underline'>
                  Technology Used
                </p>
                <div className='badge badge-outline'>React</div>
                <div className='badge badge-outline'>Express</div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-panel '>
          <div className='h-full transition-all shadow-xl hover:scale-105 hover:outline-1 hover:outline-stone-300 card w-96 bg-base-100'>
            <figure>
              <img src={img4} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Project Name
                <div className='py-1 bg-orange-500 badge badge-secondary hover:text-blue-300 hover:bg-opacity-75'>
                  View The Repository
                </div>
              </h2>
              <p>
                Project description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Enim deserunt suscipit asperiores
                necessitatibus tempore nesciunt voluptates voluptas error?
                Tempore sequi officia eaque repudiandae? Odio, vero vel error
                dolore sint doloremque?
              </p>
              <div className='items-center justify-end card-actions'>
                <p className='text-xl font-semibold text-blue-400 underline'>
                  Technology Used
                </p>
                <div className='badge badge-outline'>React</div>
                <div className='badge badge-outline'>Express</div>
              </div>
            </div>
          </div>
        </div>
      </Flicking>
    </section>
  )
}

export default Featured

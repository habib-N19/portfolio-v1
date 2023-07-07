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
      duration: 1200,
      direction: 'NEXT',
      stopOnHover: true
    })
  ]

  return (
    <section className='w-9/12 mx-auto'>
      <h1 className='px-4 py-16 text-4xl font-semibold text-center'>
        Featured Work
      </h1>
      <Flicking plugins={plugins} circular={true}>
        <div className='card-panel'>
          <div className='h-full shadow-xl card w-96 bg-base-100'>
            <figure>
              <img src={img1} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Shoes!
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='justify-end card-actions'>
                <div className='badge badge-outline'>Fashion</div>
                <div className='badge badge-outline'>Products</div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-panel'>
          <div className='h-full shadow-xl card w-96 bg-base-100'>
            <figure>
              <img src={img2} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Shoes!
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='justify-end card-actions'>
                <div className='badge badge-outline'>Fashion</div>
                <div className='badge badge-outline'>Products</div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-panel'>
          <div className='h-full shadow-xl card w-96 bg-base-100'>
            <figure>
              <img src={img3} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Shoes!
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='justify-end card-actions'>
                <div className='badge badge-outline'>Fashion</div>
                <div className='badge badge-outline'>Products</div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-panel'>
          <div className='h-full shadow-xl card w-96 bg-base-100'>
            <figure>
              <img src={img4} alt='card-item' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Shoes!
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='justify-end card-actions'>
                <div className='badge badge-outline'>Fashion</div>
                <div className='badge badge-outline'>Products</div>
              </div>
            </div>
          </div>
        </div>
      </Flicking>
    </section>
  )
}

export default Featured

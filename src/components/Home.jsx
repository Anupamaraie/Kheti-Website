import React from 'react'
import {
    // CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import { Link} from 'react-router-dom'
import bgImg from '../assets/home.jpg'

const Home = () => {
  return (
    <div id='heroid' name='home' className='w-full h-screen flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-3 py-4'>
                <p className='text-2xl'>One step rooftop farming solution</p>
                <h1 className='py-3 text-3xl md:text-5xl font-bold font-serif'>स्वावलम्बी खेती</h1>
                <p className='text-2xl'>Serving you with best rooftop kheti website</p>
                <div className='pt-4 pr-5 sm:w-[60%]'>
                <a href='https://drive.google.com/file/d/1mAK0F2gDQA3b8lEAaQgeyPViGQXs-M1F/view?usp=sharing' target="_blank"><button className='py-2 px-6 sm:w-[60%] my-2 rounded-lg'><Link to=''>Learn More</Link></button></a>
            </div>
            </div>
            <div>
                <img className='w-full h-full hover:scale-100 transition-transform rounded-lg' src={bgImg} alt="/" />
            </div>
    
        </div>
    </div>
  )
}

export default Home
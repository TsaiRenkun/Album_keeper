import React, { useContext, useEffect } from 'react'
import PhotoContext from '../../context/photo/photoContext'
import Photo from '../photo/photos'
import PhotoFilter from '../photo/photoFilter'
import PhotoForm from '../photo/photoForm'
import UploadLists from '../photo/uploadLists'

const Home = () => {
  const photoContext = useContext(PhotoContext)
  const { healthCheck, photoList, uploaded } = photoContext

  useEffect(() => {
    healthCheck()
    photoList()

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className='grid-2'>
        <div>
          <PhotoForm />
        </div>
        <div>
          <UploadLists list={uploaded} />
        </div>
      </div>
      <PhotoFilter />
      <div>
        <Photo />
      </div>
    </div>
  )
}

export default Home

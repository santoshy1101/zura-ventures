import React, { useState } from 'react'
import axios from 'axios'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { LuUpload } from 'react-icons/lu'
const imageUrl = localStorage.getItem('imageUrl')

const ImageUrl = () => {
  const [file, setFile] = useState('')
  const upload = async (e) => {
    e.preventDefault()
    if (file) {
      const data = new FormData()
      data.append('file', file)
      data.append('upload_preset', 'uploadImage')

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/davmehptb/image/upload',
        data,
      )

      if (response.status === 200) {
        const imageUrl = response.data.url

        localStorage.setItem('imageUrl', imageUrl)
        alert('Image Uploaded')
        // console.log(response)
      }
    }
  }

  return (
    <div className="   text-center  w-[300px] flex flex-col py-5 ">
      <div className="flex items-center justify-around">
        {file ? (
          <div className="w-[50px] h-[50px]  rounded-full">
            {' '}
            <img
              className="w-[100%] h-[100%] rounded-full"
              src={URL?.createObjectURL(file)}
              alt=""
            />
          </div>
        ) : (
          <div className="w-[50px] h-[50px]  rounded-full">
            {' '}
            <img
              className="w-[50px] h-[50px]  rounded-full"
              src={
                imageUrl
                  ? imageUrl
                  : 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?impolicy=resize&imwidth=480'
              }
              alt=""
            />
          </div>
        )}
        <div className="font-semibold border-2 border-none h-[30px] bg-purple duration-200 rounded-sm hover:bg-[#7e22cebc]">
          <input
            className="w-[200px] cursor-pointer text-white"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>

      <br />
      <div
        onClick={upload}
        className="flex m-auto items-center justify-around border-2 cursor-pointer w-[150px] text-white text-base hover:bg-[#7e22cebc] duration-200 bg-purple px-2 py-2 rounded-md"
      >
        Upload Image{' '}
        <span>
          <LuUpload size={20} />
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-300">Recommended Size: 48x48px</p>

      <br />
    </div>
  )
}

export default ImageUrl

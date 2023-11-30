import React from 'react'
import CloudUpload from '../assets/cloud_upload.svg'


const SelectFile = () => {
  return (
    <div>
      <p className="text-center text-slate-400">or</p>

      <div className="flex flex-col items-center py-2 border-2 border-dotted rounded-lg gap-y-4 border-slate-400">
        <img src={CloudUpload} alt="cloud_upload" />
        <p className="text-sm ">
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="text-xs text-slate-400">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{' '}
        </p>
        <span className="px-4 py-1 font-semibold border-2 rounded-full cursor-pointer hover:bg-[#7e22ce7c] text-purple hover:text-white">
          Select File
        </span>
      </div>
    </div>
  )
}

export default SelectFile

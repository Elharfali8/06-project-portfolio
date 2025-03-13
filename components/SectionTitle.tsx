import React from 'react'

const SectionTitle = ({text}: {text: string}) => {
  return (
      <div className='grid place-items-center '>
          <p className='bg-gray-200 px-8 py-[6px] rounded-xl capitalize text-lg lg:text-xl poppins-medium dark:bg-gray-700'>
              {text}
          </p>
    </div>
  )
}

export default SectionTitle
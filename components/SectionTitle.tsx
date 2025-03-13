import React from 'react'

const SectionTitle = ({text, subTitle}: {text: string, subTitle:string}) => {
  return (
      <div className='grid place-items-center container main-container'>
          <p className='bg-gray-200 px-8 py-[6px] rounded-xl capitalize text-lg lg:text-xl poppins-medium dark:bg-gray-700'>
              {text}
          </p>
          {subTitle && (
              <p className='mt-3 lg:mt-5 text-gray-600 dark:text-gray-300 text-lg lg:text-xl text-center'>
                  {subTitle}
              </p>
          )}
    </div>
  )
}

export default SectionTitle
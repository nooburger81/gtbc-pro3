import React from 'react'

const MyQuizzes = () => {
  return (

    
    <div name='myquiz' className='w-full flex justify-center justify-around items-center text-center m-auto py-8'>
    <div className='w-full h-full p-4 m-top-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src='https://ca.slack-edge.com/T04P45WQ2TY-U05012X4H5J-291d0407c03d-512' alt="friend face" />
        <p className='my-4'>My Friend Jung</p>
        <button>Take Quiz</button>
    </div>
    <div className='w-full h-full p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src='https://ca.slack-edge.com/T04P45WQ2TY-U04USPDM24X-d9b977422c49-512' alt="friend face" />
        <p className='my-4'>My Friend Cole</p>
        <button>Take Quiz</button>
    </div>
    <div className='w-full h-full p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src='https://media.licdn.com/dms/image/C4D03AQHojg_dNPGyfg/profile-displayphoto-shrink_200_200/0/1590379113966?e=1692230400&v=beta&t=_QIzQr5vUkLAzNgmN3tjymefxPIcTUDsEeVwfn8cjYs' alt="friend face" />
        <p className='my-4'>My Friend Rehman</p>
        <button>Take Quiz</button>
    </div>
  </div>
  )
}

export default MyQuizzes 
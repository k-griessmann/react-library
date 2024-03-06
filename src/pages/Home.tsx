import Background from 'C:/Users/Kristoffer/Documents/self_paced/react/react-library/react-library/src/assets/images/Library.jpg'

function Home() {
    return (
      <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
          <div className='flex h-screen place-items-center text-4xl '>
            <h3 className='text-white bg-black bg-opacity-70 text-4xl rounded-lg px-4 py-2'>Welcome to the library!</h3>
          </div>
      </div>
    )
  }
  
  export default Home
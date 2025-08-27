import maleImage from '../assets/male-removebg-preview.png'
import femaleImage from '../assets/female-removebg-preview.png'
import { Link } from 'react-router-dom'

function HomePage() {

  const handleClick = (gender: 'male'| 'female') => {
        if (gender === "male"){
          // navigate to female male Page

          window.open('/male')
        }
        else 
        {
          // navigate to female page
                    window.open('/female')

        }
  }

  return (
    <>
   <div className="container">
      <h1 style={{ textAlign: 'center'}}> Get the future</h1>
          {/* image  */}
          <div className='flex-box'>

            
            <div className='button-container'>
              <img src={maleImage}  height={300} width={250} />
              < button className='button'><Link to={'/female'}>Male</Link></button>
            </div>
            <h2 style={{ color: "#ff69b4", alignSelf:"center", marginLeft: 50}}>choose your gender</h2>
             <div className='button-container'>
              <img src={femaleImage} height={300} width={290}  style={{}} />
              < button className='button' ><Link to={'/female'}>Female</Link></button>
            </div>
          </div>
          {/* buttons */}


   </div>
            </>
  )
}

export default HomePage
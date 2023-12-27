import GalaxyScene from '../GalexyScene';
import logo from "../assets/images/milestoneLight.png";
import TimeLine from '../TimeLine.jsx';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full flex-shrink-1 mx-auto'>
            <GalaxyScene />
        </div>
      <div className='w-full absolute top-0 left-0 right-0 flex flex-col items-center'>
        <img className='w-[48rem] mb-10' src={logo} alt=""/>
      </div>

      <div className='absolute top-[80vh]'>
        <TimeLine />
      </div>
    </div>
  )
}

export default Home

import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div className="w-[100%] h-screen" >
        <div className="flex mb-24">
            <Navbar />
        </div>
        <div className="text-white text-center">
            <h1 className="text-9xl">About Page</h1>
        </div>
    </div>
  )
}

export default About

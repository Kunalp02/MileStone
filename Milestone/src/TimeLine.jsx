import { useTrail, animated } from 'react-spring';


const TimeLine = () => {
  const timelineData = [
    {
      id: 1,
      title: 'Milestone 2k24',
      description: 'Registration will open soon',
      logo: 'https://img.icons8.com/tiny-color/32/code.png',
    },
    {
      id: 2,
      title: 'Milestone 2k23',
      description: 'Description of Event 2',
      logo: 'https://img.icons8.com/tiny-color/32/code.png',
    },
    {
      id: 3,
      title: 'Milestone 2k22',
      description: 'Description of Event 1',
      logo: 'https://img.icons8.com/tiny-color/32/code.png',
    },
    {
      id: 4,
      title: 'Milestone 2k21',
      description: 'Description of Event 2',
      logo: 'https://img.icons8.com/tiny-color/32/code.png',
    },
  ];

  const [trail] = useTrail(timelineData.length, () => ({
    opacity: 1,
    config: { duration: 1500 },
  }));

  return (
    <div className="flex flex-col w-11/12 mx-auto">
      {trail.map((props, index) => (
        <animated.div key={timelineData[index].id} style={props}>
          <div className="timeline-item">
            <img src={timelineData[index].logo} alt="image" />

            <div className="ml-3 w-[100%] flex items-start justify-start gap-20">
              <div className="mt-2 mb-5 w-0.5 h-[20rem] bg-gradient-to-r from-purple-500 to-black shadow-glow">
                {/* Vertical line */}
              </div>

              <div className="mb-5">
                <h3 className="mb-2 lg:text-8xl sm:text-4xl font-bold">{timelineData[index].title}</h3>
                <p className="mb-2 text-gray-600">{timelineData[index].description}</p>
                <button className="mb-2 border-none bg-white rounded px-2 py-2 font-bold">Read More</button>
              </div>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default TimeLine;

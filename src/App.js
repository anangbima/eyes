import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const widthEyelid = 300;
  const heightEyelid = 300;

  const widthScreen = window.innerWidth;
  const heightScreen = window.innerHeight;

  const [mousePos, setMousePos] = useState({});
  const [move, setMove] = useState({
    left: '50%',
    top: '50%',
  });

  const updateMove = (x, y) => {
    // const widthEyelid = 300;
    // const heightEyelid = 300;

    const percentWidthScreen = (x / widthScreen) * 100;
    const curentWidthEyelid = (percentWidthScreen / 100) * widthEyelid;

    const percentHeightScreen = (y / heightScreen) * 100;
    const curentHeightEyelid = (percentHeightScreen / 100) * heightEyelid;

    setMove({
      left : curentWidthEyelid+'px',
      top : curentHeightEyelid+'px',
    }) 
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x : event.clientX,
        y : event.clientY,
      })

      updateMove(event.clientX, event.clientY);

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove', handleMouseMove
      )
    }
  }, []);

  return (
    <div className="App">
      <div className='eye-wrapper'>
        <div className='left'>
          <div className='eyeball'>
            {/* <div className='eyebrow left'></div> */}
            <div className='eyelid'></div>
            <div className='sklera'>
              <div className='iris' style={move}>
                <div className='cornea'>

                </div>

                <div className='reflection'>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='eyeball'>
            {/* <div className='eyebrow right'></div> */}
            <div className='eyelid'></div>
            <div className='sklera'>
              <div className='iris' style={move}>
                <div className='cornea'>

                </div>
                <div className='reflection'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

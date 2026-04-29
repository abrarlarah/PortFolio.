import './FloatingShapes.css';

const FloatingShapes = () => {
  return (
    <div className="floating-shapes" aria-hidden="true">
      {/* Rotating cubes */}
      <div className="shape shape--cube shape--1">
        <div className="cube">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>

      <div className="shape shape--cube shape--2">
        <div className="cube cube--sm">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>

      <div className="shape shape--cube shape--3">
        <div className="cube cube--lg">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>

      {/* Floating rings */}
      <div className="shape shape--ring shape--4"></div>
      <div className="shape shape--ring shape--5"></div>

      {/* Spinning diamonds */}
      <div className="shape shape--diamond shape--6"></div>
      <div className="shape shape--diamond shape--7"></div>

      {/* Glowing dots */}
      <div className="shape shape--dot shape--8"></div>
      <div className="shape shape--dot shape--9"></div>
      <div className="shape shape--dot shape--10"></div>

      {/* Floating triangles */}
      <div className="shape shape--triangle shape--11"></div>
      <div className="shape shape--triangle shape--12"></div>

      {/* Cross shapes */}
      <div className="shape shape--cross shape--13"></div>
      <div className="shape shape--cross shape--14"></div>
    </div>
  );
};

export default FloatingShapes;

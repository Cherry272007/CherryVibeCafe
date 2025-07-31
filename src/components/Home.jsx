import './Home.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const el = useRef(null);
  const typedRef = useRef(null);
  useEffect(() => {
    if (!el.current) return;

    typedRef.current = new Typed(el.current, {
      strings: ['Hello!', 'Welcome to CherryVibe Cafe'],
      typeSpeed: 70,
      backSpeed: 50,
      startDelay: 300,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url('/image/image copy 4.png')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }} className="relative w-full py-[50px] h-[800px] ">
        <div className="Text w-[95%] h-[100%] px-[20px] flex items-center justify-end">
        <div className="caption w-[60%] flex flex-col gap-3 items-center justify-center">
          <h1 className="text-white font-serif text-center font-bold uppercase text-[35px]">
            <span ref={el} />
          </h1>
          <p className="text-white font-serif text-center text-[20px]">
            Where every cup is crafted with care. Enjoy rich coffee, fresh treats, and a warm,
            inviting atmosphere. Whether relaxing or socializing, find your perfect moment here.
            Taste the vibe, savor the flavor, and feel right at home with us.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;

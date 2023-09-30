import React from 'react';
import './topbar.css'

function Topbar() {
  return (
    <div style={{
      // border: "1px solid green",
      height: "4rem",
      display: 'flex',
      alignItems: 'center',
      padding: '4px 16px',
      gap: '2em',
      justifyContent: 'space-between'
    }}>

      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        gap: '2em',

      }}>
        <div style={{
          color: '#6C5DD3',
          fontFamily: 'sans-serif',
          fontSize: "24px",
          fontWeight: '700',
        }}>IGGA</div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          border: '0.5px solid #ccc',
          padding: '10px',
          width: '300px',
          borderRadius: '30px',
        }}>
          <img src='src/assets/Vector.svg' style={{ marginRight: '8px' }} />
          <input style={{
            flex: '1',
            // borderRadius: '20px',
            // height: '2rem',
            // width: '200px',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            // padding: '0px 10px',
            fontSize: '16px',
            color: '#FAF9F6'
          }}
            placeholder='Search...' />
        </div>
      </div>

      <ul className='top-bar'>
        <li>Home</li>
        <li>Explore</li>
        <li>Collections</li>
      </ul>

      <img
        src='src/assets/profile.png'
        style={{
          height: '36px',
          width: '36px',
          borderRadius: '24px'
        }}
      />
    </div>
  );
}

export default Topbar;


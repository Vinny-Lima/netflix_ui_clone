import React, { useState } from 'react';
import './style.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 100;
    }

    setScrollX(x);
  }

  return(
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow--left' onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: '50px'}} />
      </div>
      <div className='movieRow--right' onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: '50px'}} />
      </div>

      <div className='movieRow--listArea'>
        <div className='movieRow--list' style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className='movieRow--item'>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
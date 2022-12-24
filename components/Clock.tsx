import { useEffect, useLayoutEffect, useRef, FC } from 'react';

import {DIGITS} from './digits'

const Clock: FC<{time:string[]}> = ({ time }) => {
  return (
      <div className="watch-container">
      {[...Array(time.length)].map((x, idx1) => (
          <div key={idx1} className="watch-circle-container" >
          {[...Array(24)].map((y, clockIdx) => {
            const digitNum = time[idx1]
            return (
              <span
                key={clockIdx}
                className="clock"
              >
                <span
                  className="arrow1"
                  style={{
                    transform: `rotate(${DIGITS[digitNum][clockIdx][0]}deg)`,
                  }}
                />
                <span
                  className="arrow2"
                  style={{
                    transform: `rotate(${DIGITS[digitNum][clockIdx][1]}deg)`,
                  }}
                />
              </span>
            );
          })}
      </div>
        ))}
  </div>
  )
}

export default Clock

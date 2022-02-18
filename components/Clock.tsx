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
              <span key={clockIdx} className='clock' style={{
                "--angle-1": `${DIGITS[digitNum][clockIdx][0]}deg`,
                "--angle-2": `${DIGITS[digitNum][clockIdx][1]}deg`,
                }}
            />
            )
          })}
      </div>
        ))}
  </div>
  )
}

export default Clock

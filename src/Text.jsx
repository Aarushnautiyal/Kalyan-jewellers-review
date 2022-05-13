// import React, { useEffect, useState } from 'react'

const Text = ({value}) => {
    // const [textDisplay, setTextDisplay] = useState('Oh NO')
//     useEffect(() => {
//      switch (value) {
//       case 1:
//         setTextDisplay('oh no')
//         break;
//       case 2:
//         setTextDisplay('oh k')
//         break;
//       case 3:
//         setTextDisplay('oh no')
//         break;
//       case 4:
//         setTextDisplay('oh k')
//         break;
//       case 5:
//         setTextDisplay('Excellent')
//         break;
//       default:
//         break;
//     }
//   }, [value])
    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}

export default Text

import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  
  const quantityCare = {
  1: "peu",
  2: "modérément",
  3: "beaucoup"
  }

  const scaleType =
  careType === 'light' ? (
    <img src={Sun} alt='sun-icon' />
  ) : (
    <img src={Water} alt='water-icon' />
  )

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()} onClick={ () => alert(`Cette plante requiert ${quantityCare[scaleValue]} ${
            careType === 'light' ? 'de lumière' : "d'arrosage"}`)}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
  
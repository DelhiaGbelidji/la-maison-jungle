import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light, price, }) {
	function handleClick(plantName) {
		alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
	}

	return (
		<li key={id} className='lmj-plant-item' >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={()=> handleClick(name)}/>
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<div>{price} €</div>
		</li>
	)
}

export default PlantItem
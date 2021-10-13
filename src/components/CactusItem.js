import './CactusItem.css';

function CactusItem(porps) {

  const { cactus, onCactusClick } = porps

  return (

    <div className="cactus-item" >
      <img src={cactus.picture} onClick={() => { onCactusClick(cactus) }} alt="img" />
      <p onClick={() => { onCactusClick(cactus) }}>{cactus.title}</p>
    </div>

  );
}

export default CactusItem;


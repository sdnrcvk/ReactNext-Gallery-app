export default function Modal({secilenResim,setSecilenResim}) {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSecilenResim(null);
        }
      }

    return (
        <div className="backdrop" onClick={handleClick}>
          <img src={secilenResim} alt="resim" />
        </div>
      )
}


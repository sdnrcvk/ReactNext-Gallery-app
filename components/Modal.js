import { motion } from "framer-motion";

export default function Modal({secilenResim,setSecilenResim}) {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSecilenResim(null);
        }
      }

    return (
        <motion.div className="backdrop" onClick={handleClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
          <motion.img src={secilenResim} alt="resim" 
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          />
        </motion.div>
      )
}


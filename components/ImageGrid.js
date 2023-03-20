import { db } from "../firebase"
import { collection,onSnapshot,query,orderBy } from "@firebase/firestore"
import { useEffect,useState } from "react"
import { motion } from "framer-motion"

export default function ImageGrid({setSecilenResim}) {

    const [docs,setDocs]=useState([])

    useEffect(()=>{

        let ref=collection(db,'resimler');
        ref=query(ref,orderBy("tarih","desc"))

        onSnapshot(ref,snap=>{
            let documents = [];
            snap.forEach(doc => {
              documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        })
    },[])


    return (
        <div className="img-grid">
        {docs && docs.map(doc => (
	        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{opacity:1}}
          onClick={()=>setSecilenResim(doc.url)}
          >
          <motion.img src={doc.url} alt="yüklenen resim"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1}}
          />
          </motion.div>
        ))}
      </div>
    )
}
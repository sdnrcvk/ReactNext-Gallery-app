import { db } from "../firebase"
import { collection,onSnapshot,query,orderBy } from "@firebase/firestore"
import { useEffect,useState } from "react"


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
	        <div className="img-wrap" key={doc.id} onClick={()=>setSecilenResim(doc.url)}/>
        ))}
      </div>
    )
}
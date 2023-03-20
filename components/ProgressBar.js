
import { useState,useEffect } from "react";
import { storage } from "../firebase";
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'


export default function ProgressBar({file,setFile}) {

    const [progress,setProgress]=useState(0)
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(null)
    const [iptal,setIptal]=useState(false)

   

    useEffect(()=>{
        const storageRef=ref(storage,file.name)
        const uploadTask= uploadBytesResumable(storageRef,file)

        uploadTask.on('state_changed', 
            (snapshot) => {
                
                let yuzdelik = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if(!iptal){
                    setProgress(yuzdelik)
                }     
            }, 
            (err) => {
                if(!iptal){
                    setError(err)
                }  
            }, 
            () => {
                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    if(!iptal){
                        setUrl(downloadURL)
                    }
                    
                });
            }
        );

        if(url){
            if(!iptal){
                setFile(null)    
            }
           
        }

        return ()=>setIptal(true)

    },[url,setFile])
    

    return (
        <div className="progress-bar" style={{width:progress + '%'}}>
            
        </div>
    )
}

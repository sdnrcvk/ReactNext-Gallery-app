import { useState } from "react"

export default function UploadForm() {

    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);

    const tipListesi=['image/png','image/jpeg'];

    const handleChange=(e)=>{
        console.log(e.target.files)
        let secilen=e.target.files[0];

        if(secilen && tipListesi.includes(secilen.type)){
            setFile(secilen);
            setError('')
        }else{
            setFile(null)
            setError('Lütfen png ya da jpeg/jpg uzantılı dosya yükleyiniz')
        }

    }
    

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

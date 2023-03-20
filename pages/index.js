import Title from "@/components/Title"
import UploadForm from "@/components/UploadForm"
import ImageGrid from "@/components/ImageGrid"

export default function Home() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

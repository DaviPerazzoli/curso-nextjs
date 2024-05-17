import { serverSideFunction } from "@/utils/server-utils"
import ImageSlider from "@/components/ImageSlider";

export default function ServerRoute() {
    console.log('Server route rendered');
    const result = serverSideFunction();
    return (<>
    <h1>Server Route Page</h1>
    <p>{result}</p>
    <ImageSlider />
    </>)
}
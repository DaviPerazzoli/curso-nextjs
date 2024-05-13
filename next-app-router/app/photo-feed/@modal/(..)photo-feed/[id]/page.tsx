import Modal from "@/components/Modal";
import { animalImages } from "../../../animals";
import Image from "next/image";



export default function InterceptedPhotoPage({params}: {params: {
    id: string;
}}) {
    const animal = animalImages.find(animal => animal.id === params.id);
    
    if (!animal) {
        return 
    }

    const colorSpanStyle = {
        display: "inline-block", 
        width: '20px', 
        height: '20px', 
        backgroundColor: animal.color, 
        border: '3px solid black', 
        borderRadius: '2px',
        marginLeft: '10px'
    };

    return (
        <Modal>
            <Image width={900} height={900} alt={animal.name} src={animal.src} className="photo"/>
            <div className="photo-description">
                <p>Name: {animal.name}</p>
                <p>Color:
                    <span style={colorSpanStyle}></span>
                </p>
            </div>
        </Modal>
    )
}
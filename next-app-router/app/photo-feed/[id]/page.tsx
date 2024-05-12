import { animalImages } from "../animals";
import Image from "next/image";



export default function PhotoPage({params}: {params: {
    id: string;
}}) {
    const animal = animalImages.find(animal => animal.id === params.id);
    
    if (!animal) {
        return <h1>The animal was not found</h1>
    }

    const colorSpanStyle = {
        display: "inline-block", 
        width: '10px', 
        height: '10px', 
        backgroundColor: animal.color, 
        border: '2px solid black', 
        borderRadius: '5px'};

    return (
        <div className="photo-page">
            <header className="photo-title">{animal.name}</header>
            <Image alt={animal.name} src={animal.src} className="photo"/>
            <div className="photo-description">
                <p>Name: {animal.name}</p>
                <p>Color: 
                    <span style={colorSpanStyle}></span>
                </p>
            </div>
        </div>
    )
}
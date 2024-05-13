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
        width: '20px', 
        height: '20px', 
        backgroundColor: animal.color, 
        border: '3px solid black', 
        borderRadius: '2px',
        marginLeft: '10px'
    };

    return (
        <main className="photo-page">
            <header className="photo-title">{animal.name}</header>
            <Image width={900} height={900} alt={animal.name} src={animal.src} className="photo"/>
            <div className="photo-description">
                <p>Name: {animal.name}</p>
                <p>Color: 
                    <span style={colorSpanStyle}></span>
                </p>
            </div>
        </main>
    )
}
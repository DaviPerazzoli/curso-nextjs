import { animalImages } from "./animals"
import Image from "next/image"

export default function PhotoFeed () {
    return (<>
            <header>
                <h1>Photo Feed</h1>
            </header>
            <main>
                {
                    animalImages.map(animal => {
                        return (
                            <div key={animal.id} className="animal-feed-photo">
                                <Image alt={animal.name} src={animal.src}/>
                            </div>
                        )
                    })
                }
            </main>
        </>)
}
"use client";

import { animalImages } from "./animals";
import Image from "next/image";
import Link from "next/link";

export default function PhotoFeed () {
    return (<main>
            <header className="photo-feed-title">
                <h1>Photo Feed</h1>
            </header>
            <div className="photo-feed">
                {
                    animalImages.map(animal => {
                        return (
                            <Link key={animal.id} className="animal-feed-photo" href={`/photo-feed/${animal.id}`}>
                                <Image width={400} height={400} alt={animal.name} src={animal.src}/>
                            </Link>
                        )
                    })
                }
            </div>
        </main>)
}
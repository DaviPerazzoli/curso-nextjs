"use client";

import { Metadata } from "next";

interface Repository {
  id: number;
  name: string;
  full_name: string;

}

interface Time {
  datetime: string
}

async function getTime(): Promise<Time> {
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Chicago',
    {
      cache: 'no-store'
    }
  )
  return res.json();
}

async function getRepo(): Promise<Repository> {
  const res = await fetch('https://api.github.com/repos/vercel/next.js',
    {
      next: {
        revalidate: 5
      },
    }
  );
  return res.json()
}

// export const metadata: Metadata = {
//   title: 'Davi\'s page',
//   description: 'Oi mundo.'
// }

export default function Page() {
  // const [data, time] = await Promise.all([getRepo(), getTime()]);
  const random = Math.random() * 2;

  if( random < 1 ){
    throw new Error('Error :(')
  }
  return (
    <p>Main page</p>
  //  <h1>{data.full_name}, updated at {time.datetime}</h1>
  );
}

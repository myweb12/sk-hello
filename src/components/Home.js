import React from "react"
import image from "../a1image.jpg"

export default function Home() {
    return (
        <main>
            <img src ={image} alt="Victoria snap" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-56 px-8">
                <h1 className="text-6xl text-green-1000 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Srinivasan.</h1>
            </section>
        </main>
    )
}
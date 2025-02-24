"use client"

import React, { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import type { CarouselApi } from "@/components/ui/carousel"
import stars from "/public/assets/stars.png"
import Autoplay from "embla-carousel-autoplay"

const testimonialsData = [

  {
    text: "The logo designs we received were beyond what we envisioned. Highly recommend Kode Affinity for their creativity and professionalism.",
    author: " – Ali M., CEO of TechVibe",
    stars: 5,
  },
  {
    text: "Our app development project was a huge success thanks to Kode Affinity's expertise. We are thrilled with the results!",
    author: "– James L., Product Manager at AppX",
    stars: 5,
  },
  {
    text: "The branding services from Kode Affinity helped us create a strong and consistent brand identity. Excellent service!" ,
    author: "– Amir K., Creative Director at UrbanFlare",
    stars: 5,
  },
  {
    text: "Kode Affinity delivered an exceptional website for our business! Their team exceeded expectations and provided top-notch customer.",
    author: "– Sarah J., Founder of GreenScape Solutions",
    stars: 5,
  },

]

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleDotClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index)
      }
    },
    [api],
  )

  return (
    <div className="mt-20 ">
      <h1 className="text-center font-semibold lg:text-5xl text-3xl">TESTIMONIALS</h1>
      <hr className="border-red-700 mb-10 w-52 mx-auto mt-2" />

      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2  md:pl-4 md:basis-1/2">
              <div className="p-1">
                <Card className="rounded-2xl overflow-hidden">
                  <CardContent
                    className="flex flex-col justify-between p-6 lg:h-[200px] md:h-[250px]"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-grow space-y-4">
                        <div className="flex">
                          {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                            <Image
                              key={starIndex}
                              src={stars || "/placeholder.svg"}
                              alt="star"
                              height={20}
                              width={20}
                            />
                          ))}
                        </div>
                        <p className="text-white text-lg">{testimonial.text}</p>
                      </div>
                      <h4 className="text-xl font-bold text-white ">{testimonial.author}</h4>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Clickable Pagination Dots */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 mx-1 rounded-full transition-colors ${
              current === index
                ? "bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Testimonials


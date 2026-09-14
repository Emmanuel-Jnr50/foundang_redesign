// src/components/ImageCarousel.jsx
import image1 from '../assets/logoipsum-297.svg'
import image2 from '../assets/logoipsum-311.svg'
import image3 from '../assets/logoipsum-372.svg'
import image4 from '../assets/logoipsum-297.svg'
import image5 from '../assets/logoipsum-311.svg'
import image6 from '../assets/logoipsum-372.svg'

const images = [
    image1,
    image2,
    image3,
    image4, 
    image5, 
    image6
]

const ImageCarousel = () => {
  // Duplicate the array to create seamless loop
    const doubled = [...images, ...images]

    return (
        <div className="overflow-hidden w-[95%] relative h-27 z-0 -left-12 max-sm:left-0 max-sm:w-full">
            <div className="fade-left absolute h-full bg-purple w-65 z-40 top-0 left-0 mask-r-from-10 max-sm:w-12 max-sm:mask-r-from-0"></div>
            <div className="fade-left absolute h-full bg-purple w-65 z-40 top-0 right-0 mask-l-from-10 max-sm:w-12 max-sm:mask-l-from-0"></div>
            <div className="flex animate-scroll w-max items-center">
                {doubled.map((src, index) => (
                <div key={index} className="mx-8 shrink-0 max-sm:mx-5">
                    <img
                    src={src}
                    alt={`slide-${index}`}
                    className="h-7.5 max-sm:h-6"
                    />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel
import Image from "next/image"

const TestimonialsCard = ({ testimonialDetails }) => {
  return (
    <div className="flex flex-col text-center md:text-left px-2">
      <div className="mb-4">
        <Image src="/testimonial/q1.png" height={72} width={116} alt="quote" />
      </div>
      <div className="flex flex-col gap-3 bg-white shadow px-10 py-16 rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] w-full md:w-[484px] h-[300px] md:h-[450px]">
        <p className="text-[#5C5C5C] overflow-auto">
          {testimonialDetails.desc}
        </p>
        <div className="flex flex-col gap-3 mt-auto">
          <div className="border-b border-[#E36200] w-32 md:w-44 mx-auto md:mx-0 self-center" />
          <div>
            <h3 className="text-xl md:text-2xl text-[#E36200] font-semibold">
              {testimonialDetails.name}
            </h3>
            <p className="text-sm md:text-lg text-[#5C5C5C]">
              {testimonialDetails.post}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-2">
        <Image
          src="/testimonial/q2.png"
          height={72}
          width={116}
          alt="quote"
          className="ms-auto md:ms-96"
        />
      </div>
    </div>
  )
}

export default TestimonialsCard

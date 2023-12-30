import cta_image from "../public/cta_image.png";
import Image from "next/image";
export const CTA = () => {
    return (
        <section>
            <div
                className="
         max-w-[980px] mx-auto
         flex flex-col items-center justify-center text-center gap-y-5 py-8 "
            >
                <h1
                    className="text-center font-bold text-grey-300 font-spaceGrotesk  leading-[1.05]

                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl  
                "
                >
                    Never Forget A Loved One&apos;s{" "}
                    <br className="hidden sm:block" /> Celebration Again With{" "}
                    <br className="hidden sm:block" />
                    <span className="text-primary-600">365sync</span>
                </h1>
                <p
                    className="text-center font-normal text-grey-100 font-spaceGrotesk leading-[1.3]
               
                text-lg sm:text-xl md:text-2xl
                lg:text-[28px] 

                "
                >
                    From birthdays to anniversaries,{" "}
                    <span className="text-primary-600">keep the memories</span>{" "}
                    alive of <br className="hidden sm:block" />
                    all the important days of your loved ones with just a few
                    clicks.
                </p>
                <button className="bg-primary-600 text-white px-8 py-4 text-grey-200 rounded-full max-w-[300px] w-9/12 text-lg font-medium">
                    Get Started 🚀
                </button>

                <Image
                    src={cta_image}
                    alt="cta_image"
                    className="border mt-10 draggable-none"
                />
            </div>
        </section>
    );
};

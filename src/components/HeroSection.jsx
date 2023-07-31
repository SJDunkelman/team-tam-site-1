import HeroImage from "../images/hero.png";
import NavigationBar from "./NavigationBar";
import { TYPEFORM_LINK } from "../consts";

export default function HeroSection() {
    return (
        <div className="relative flex flex-wrap w-screen h-screen overflow-y-hidden bg-base">
            <div className="absolute top-0 w-full">
                <NavigationBar />
            </div>
            <div className="hidden relative md:block md:w-1/2 h-full">
                <img src={HeroImage} className="object-cover inset-0 z-10" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6">
                <h1 className="mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">Discover Your Perfect Product Role with Product Jobs Anywhere</h1>
                <p className="font-light leading-relaxed mb-8">Find exciting, fully remote roles in high-impact teams, tailored to your skills and interests.<br/> No more digging, just the top quality roles you deserve.</p>
                <a
                href={TYPEFORM_LINK}
                rel="noopener noreferrer"
                target="_blank"
                className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg font-semibold">Start Your Search</a>
            </div>
        </div>
    );
};
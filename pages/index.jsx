import Image from "next/image";
import "react-loading-skeleton/dist/skeleton.css";
import Head from "next/head";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Rayhan Rafiud Darojat - Developer, writer</title>
      </Head>
      <div className="xs:ml-0 ml-2">
        <div className="flex flex-col-reverse sm:flex-row items-start my-5 ">
          <div className="flex flex-col pr-8">
            <h1 className="font-extrabold mt-6 text-4xl md:text-5xl tracking-tight notranslate">
              Rayhan Rafiud Darojat
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-1 mt-[-0.1px]">
              Developer&ensp;//&ensp;Indoesia
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
     A student live in Indonesia, and coding as a hobby.
            </p>
          </div>
          <div className="flex-1"></div>
          <div className="w-[130px] sm:w-[140px] relative sm:my-[25px] my-[-15px] sm:mx-0 mx-[-10px] ">
            <Image
              placeholder="blur"
              src={require("/public/eliaschen.jpg")}
              alt="eliaschen"
              className="w-auto rounded-full grayscale"
            />
          </div>
        </div>
        <div className="mt-[-40px]">
          <h1 className="text-3xl font-bold mb-1">Develop skills</h1>
          <p className="text-md">
            &thinsp;Nodejs&thinsp;/&thinsp;Laravel&thinsp;/&thinsp;Go&thinsp;
          </p>
        </div>
        <div className="mt-[20px]">
          <h1 className="text-3xl font-bold mb-1">Hobby</h1>
          <p className="text-md">&thinsp;Develop, Design, Game</p>
        </div>
        <div className="mt-[20px]">
          <h1 className="text-3xl font-bold mb-1">Latest CV</h1>
          <p className="text-md">&thinsp;Download CV</p>
        </div>
      </div>
    </main>
  );
}

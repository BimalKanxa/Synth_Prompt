import Feed from "@components/Feed"
import Footer from "@components/Footer"

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
        Discover & Share
    <br className="max-md:hidded"/>
    <span className="orange_gradient text-center">AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">Synth Prompt is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>

    {/* //feed */}
    <Feed />
    <Footer/>
   </section>


  )
}

export default Home
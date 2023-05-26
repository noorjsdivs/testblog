import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {sanityClient,urlFor} from "../sanity"
import { Post } from "../typings";
import Link from "next/link";
import Inicio from "../components/Inicio";
import PantallaHeader from "../components/PantallaHeader";
import PantallaSlide from "../components/PantallaSlide";
import PantallaBanner from "../components/PantallaBanner";




 
interface Props {
  posts: [Post];
}

export default function Home({posts}:Props) {
  return (
    <div>
      <Head>
        <title>Urano Blog ..</title>
        <link rel="icon" href="./public/images/urano.jpg" />
      </Head>
       
     
      
      <main className="font-bodyFont ">
        {/* ============ Header Start here ============ */}
        <Header />
       
       <PantallaBanner />
   
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        
        {/*<Banner />*/}
        {/* ============ Banner End here ============== */}
        <div className="max-w-7xl mx-auto h-60 relative">
      
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
          {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="border-[1px] border-secondaryColor border-opacity-40 h-[450px] group">
        <div className="h-3/5 w-full overflow-hidden">
       <img src={urlFor(post.mainImage).width(350).height(350).url()} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"></img>
           </div> 
           <div className="h-2/5 w-full flex flex-col justify-center">
            <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-white">
              <p className="font-bold">{post.title}</p>
              {/*<img 
              className="w-12 h-12 rounded-full object-cover"
              src={urlFor(post.author.image).url()!} 
              alt="author" 
          />*/}
           </div> 
          <p className="py-2 px-4 text-base font-semibold text-orange-700 ">
            {post.description}
           
         {/*<span className="font-semibold"> {post.author.name} </span>*/}

          </p>
            </div>
            </div> 
        </Link>
          ))}
        </div>
        {/* ============ Post Part End here =========== */}
        <BannerBottom />
        {/* ============ Footer Start here============= */}
        <Banner />
        {/* ============ Footer End here ============== */}

      </main>
    </div>
  );
};


export const getServerSideProps = async () => {
 const query = `*[_type == "post"]{
  _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
  slug
}`
const posts = await sanityClient.fetch(query);
return {
 props: {
  posts,
 },
};
};
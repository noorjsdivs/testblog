import PortableText from 'react-portable-text';
import { GetStaticProps } from 'next';
import React, { Children, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';
import {useForm, SubmitHandler} from "react-hook-form";
import comment from '../../tech-urano/schemas/comment';



interface Props {
    post: Post;
}

type Inputs={
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const Post = ({ post }:Props) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register, 
    handleSubmit, 
    formState: { errors },
   } = useForm<Inputs>();

   const  onSubmit : SubmitHandler<Inputs> = (data)=>{
    console.log(data)
    fetch("/api/createComment",{
      method:"POST",
      body:JSON.stringify(data),
    })
    .then(()=>{
    setSubmitted(true);
    })
    .catch((err)=>{
     setSubmitted(false);
    })
   };

  return (
    <div>
      
     <Header />
     {/*main Image */}
     <img
      src={urlFor(post.mainImage).width(480).height(250).url()} className="w-full h-50 object-cover"></img>
     

     {/*Article */}
  <div className="max-w-4xl mx-auto mb-10">
    <article className='w-full auto p-5 bg-white text-3xl '>
      <h1 className='text-center font-titleFont font-extrabold text-[35px] text-primaryColor border-b-[1px] border-b-cyan-800 mt-10 mb-3'>{post.title}</h1>
      <h2 className='text-center font-bodyFont text-[30px] text-gray-500 mb-2 '>{post.description}</h2>

      <div className='flex items-center gap-2'>

        <img className='rounded-full w-12 h-12 object-cover bg-red-400' src={urlFor(post.author.image).url()} alt="authorImg" />
        <p className='font-bodyFont text-base'>Publicado por 
        <span className='font-bold text-secondaryColor'>{post.author.name}</span>- Published at {new Date(post.publishedAt).toLocaleDateString()}</p> 
      </div>

      <div className='mt-10 flex items-center gap-2'>

     <PortableText  
     dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "6qg7wgdg"}
      content={post.body}
      serializers={{
        h1: (props: any) => (
          <h1
          className='text-3x1 text-white font-normal my-5 font-titleFont'
          {...props} 
          />
        ),
        h2: (props: any) => (
          <h2
          className='text-2x1 text-black font-bold my-5 font-titleFont'
          {...props} 
          />
        ),
        h3: (props: any) => (
          <h3
          className='text-2x1 font-bold my-5 font-titleFont' 
          {...props}
          />
        ),
        li:({ children }: any) => (
          <li className='ml-4 list-disc'>{children}</li>
        ),
        link: ({href, children}: any) => (
          <a href={href} className="text-cyan-500 hover:underline">
          {children}
          </a>
        ),
      }}
  />
      </div>

    </article>
    <hr className='max-w-lg my-5 mx-auto border[1px] border-secondaryColor'/>
    <div>
      <p className='text-xs text-secondaryColor uppercase font-titleFont'>Comenta Este Articulo!!</p>
      <h3 className='font-titleFont text-3x1 font-bold'>Deja tu Comentario.! ..¬¬!</h3>
      <hr className='py-3 mt-2' />

      {/* EL FORM COMIENZA AQUI*/}
      {/* General ID para los Hooks Form*/}
      <input {...register("_id")} 
      type="hidden"
      name="_id"
      value={post._id}
      
      />
      <form onSubmit={handleSubmit(onSubmit)} className='mt-7 flex flex-col gap-6'>
        <label className='flex flex-col'>
          <span className='font-titleFont font-semibold text-base'>Nombre Completo</span>
          <input 
          {...(register("name"), {required:true})}
          className='text-base placeholder:text-sm border-b-[1px]
          border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor' 
          type="text"
          placeholder='Escribe tu Nombre' 
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-titleFont font-semibold text-base'>Email</span>
          <input 
          {...(register("email"), {required:true})}
          className='text-base placeholder:text-sm border-b-[1px]
          border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor' 
          type="email"
          placeholder='Escribe tu Correo Electronico' 
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-titleFont font-semibold text-base'>Deja tu Comentario</span>
          <textarea 
          {...(register("comment"), {required:true})}
          className='text-base placeholder:text-sm border-b-[1px]
          border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor' 
          placeholder='Escribe tu Nombre' 
              rows={6}
          />
        </label>
     <button className='w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300'
      type="submit">ENVIAR</button>

      </form>
       {/* Commmentarios*/}
       <div className='w-full flex flex-col p-10 my-10 mx-auto shadow-bgColor shadow-lg space-y-2'>
     <h3 className='text-3x1 font-titleFont font-semibold'> Comentarios</h3>
     <hr />
     {
      post.comments.map((comment)=>(
        <div key={comment._id}>
          <p>
            <span className='text-secondaryColor'>{comment.name}</span>
             {comment.comment}
            </p>
          </div>
      ))
     }
       </div>
    </div>

  </div>

     <Footer />   
    </div>
  );
};

export default Post;

export const getStaticPaths = async() =>{
    const query = `*[_type == "post"]{
        _id,
          slug{
          current
          }
      }`;
      const posts = await sanityClient.fetch(query);
      const paths = posts.map((post: Post)=>({
      params:{
        slug: post.slug.current,
      },
      }));
      return {
        paths,
        fallback: "blocking",
      };
};

export const getStaticProps: GetStaticProps = async({ params })=>{
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
          publisHedAt,
          title,
          author ->{
            name,
            image,
          },
          "comments":*[_type== "comment" && post._ref == ^._id && approved == true],
          description,
          mainImage,
          slug,
          body
      }`

      const post = await sanityClient.fetch(query,{
        slug:params?.slug,
      })

      if(!post){
        return{
           notFound:true 
        }
      }
      return {
        props:{
           post 
        },
        revalidate: 60,
      };
};
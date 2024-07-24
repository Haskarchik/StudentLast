import { Locale } from "@/i18n.config";
import Image from "next/image";
import "../SelectBlog.scss"
import MiniBlog from "@/app/components/miniBlog/MiniBlog";
import { Button } from "@mui/material";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from "next/navigation";
 
type Props = {
  params: { lang: Locale, id:string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const selectBlog:BlogProps|false=await getData(params.lang,params.id);
  if(!selectBlog){
    return params.lang=="ua"? {
          title: 'Сторінку не знайдено',
          description: 'Вибачте, але сторінку не знайдено. Будь ласка, перевірте URL або поверніться на головну сторінку.',
          robots: 'noindex, nofollow',
        }
      :
        {
          title: 'Page not found',
          description: 'Sorry, but the page was not found. Please check the URL or return to the main page.',
          robots: 'noindex, nofollow',
        }
  }else {
    return params.lang=="ua"?
        {
          title:selectBlog.name,
          description: selectBlog.description.replace(/<[^>]*>/g, '').slice(0, 120)+"...",
          robots: 'index, follow',
          keywords: 'студентські роботи, написання есе, реферати, курсові роботи, дипломні роботи, професійні письменники, конфіденційність',
        }
      :
        {
          title:selectBlog.name,
          description: selectBlog.description.replace(/<[^>]*>/g, '').slice(0, 120)+"...",
          robots: 'index, follow',
          keywords: 'student works, essay writing, essays, coursework, diploma works, professional writers, confidentiality',
        }
  }
}

type BlogProps={
  id:number,
  name:string,
  description:string,
  img:string,
  miniBlogs:{
    id: number;
    name: string;
    description: string;
    img: string;
    views: number;
    countTimeRead: number;
  }[]
}

export async function generateStaticParams() {
    const res=await fetch(process.env.NEXT_PUBLIC_API_SERVER+'blog/getPosts?',{next:{revalidate:3600*5}});
    if(!res.ok)throw new Error('Не вдалося отримати дані');
    const data=(await res.json())
    if(data.status!=200)throw new Error('Не вдалося отримати дані');
    return data.res.map((x:{id:number})=>({id:x.id.toString()}));
}

const getData=async(lang:Locale,id:string)=>{
  const res=await fetch(process.env.NEXT_PUBLIC_API_SERVER+`blog/getForId?language=${lang}&id=${id}`,{next:{revalidate:3600*5}});
  if(!res.ok)throw new Error("error");
  const data=await res.json();
  if(data.status!=200)return false;
  return data.res;
}

const page = async({params:{lang,id}}:{params:{lang:Locale,id:string}}) => {
  if(isNaN(parseInt(id))||parseInt(id)<1)notFound();
  const {blog}=await getDictionary(lang);
  const selectBlog:BlogProps|false=await getData(lang,id);
  if(selectBlog===false)notFound();
  function createMarkup(text: string) {
    return { __html: text };
  }  
  return (
    <div className="blog-container">
      <h1 className="title">{selectBlog.name}</h1>
      <div className="image">
        <Image src={process.env.NEXT_PUBLIC_SERVER+selectBlog.img} width={1920} height={1024} alt="page"/>
      </div>
      <div dangerouslySetInnerHTML={createMarkup(selectBlog.description)} className="descripion"/>
      <div className="title-more-articles">
        <h1>{blog.similarArticles}</h1>
      </div>
      <MiniBlog isThree={0} lang={lang} blogs={selectBlog.miniBlogs}/>
      <div className="button-more">
        <Link href={`/${lang}/blog/1`}>
          <Button>{blog.more}</Button>
        </Link>
      </div>
    </div>
  )
}

export default page

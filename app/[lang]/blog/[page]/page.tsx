import Pagination from "@/app/components/pagination/Pagination";
import { Locale } from "@/i18n.config";
import "../Blog.scss";
import MiniBlog from "@/app/components/miniBlog/MiniBlog";
import { getDictionary } from "@/lib/dictionary";
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from "next/navigation";
 
type Props = {
  params: { lang: Locale }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return params.lang === "ua"
    ? {
        title: "Блог - Student Help",
        description:
          "Читайте цікаві статті та новини в блозі Student Help. Наш блог пропонує корисні поради, актуальні теми з навчання та інші цікаві матеріали для студентів. Будьте в курсі останніх подій та отримуйте корисну інформацію для успішного навчання.",
        robots: "index, follow",
        keywords:
          "блог, статті, новини, навчання, поради для студентів, актуальні теми, корисна інформація, Student Help",
      }
    : {
        title: "Blog - Student Help",
        description:
          "Read interesting articles and news on the Student Help blog. Our blog offers useful tips, relevant topics in education, and other interesting materials for students. Stay informed about the latest events and get valuable information for successful learning.",
        robots: "index, follow",
        keywords:
          "blog, articles, news, education, tips for students, relevant topics, valuable information, Student Help",
      };
}



export async function generateStaticParams({params}:{params:{lang:Locale}}) {
    let res=await fetch(process.env.NEXT_PUBLIC_API_SERVER+'blog/getCountPages?limit=12',{next:{revalidate:3600*5}});
    if(!res.ok)throw new Error('Не вдалося отримати дані');
    let data=(await res.json())
    if(data.status!=200)throw new Error('Не вдалося отримати дані');
    return [Array(data.res).fill(undefined).map((_, idx)=>({page:(idx+1).toString()}))]
}

const getMiniBlog=async(page:string,language:Locale)=>{
  const res=await fetch(process.env.NEXT_PUBLIC_API_SERVER+`blog/getMini?limit=12&page=${page}&language=${language}`,{next:{revalidate:3600*5}});
  if(!res.ok)throw new Error('Не вдалося отримати дані');
  let data=(await res.json())
  if(data.status!=200)throw new Error('Не вдалося отримати дані');
  return data.res;
}
const getCountPages=async(limit:number)=>{
  const res=await fetch(process.env.NEXT_PUBLIC_API_SERVER+`blog/getCountPages?limit=${limit}`,{next:{revalidate:3600*5}});
  if(!res.ok)throw new Error('Не вдалося отримати дані');
  let data=(await res.json())
  if(data.status!=200)throw new Error('Не вдалося отримати дані');
  return data.res; 
}

const page = async({params:{page,lang}}:{params:{page:string,lang:Locale}}) => {
  if(isNaN(parseInt(page))||parseInt(page)<1)notFound();
  const {blog}=await getDictionary(lang);
  const blogs=await getMiniBlog(page,lang);
  const countPages=await getCountPages(12);
  if(blogs.length===0)notFound()
  return (
      <div>
        <div style={{marginTop:"40px",marginBottom:"15px"}} className="title-article">
          <h1>{blog.article}</h1>
        </div>
        <MiniBlog isThree={1} blogs={blogs} lang={lang}/>
        <Pagination currentPage={parseInt(page)} totalPages={countPages} url={`/${lang}/blog/`} showPages={2}/>
      </div>
  )
}

export default page

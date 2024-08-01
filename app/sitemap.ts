import { MetadataRoute } from 'next'
 
export default async function sitemap() {
  const resIdBlog=await fetch(process.env.NEXT_PUBLIC_API_SERVER+'blog/getPosts?',{next:{revalidate:3600*5}});
  if(!resIdBlog.ok)throw new Error('Не вдалося отримати дані');
  const dataIdBlog=(await resIdBlog.json())
  if(dataIdBlog.status!=200)throw new Error('Не вдалося отримати дані');
  
  const sitemapIdBlogUA=dataIdBlog.res.map((x:{id:number})=>({
    url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/selectblog/"+x.id,
    lastModified: new Date()
  }))

  const sitemapIdBlogEN=dataIdBlog.res.map((x:{id:number})=>({
    url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/selectblog/"+x.id,
    lastModified: new Date()
  }))

  
  const resPagesBlog=await fetch(process.env.NEXT_PUBLIC_API_SERVER+'blog/getCountPages?limit=12',{next:{revalidate:3600*5}});
  if(!resPagesBlog.ok)throw new Error('Не вдалося отримати дані');
  const dataPagesBlog=(await resPagesBlog.json())
  if(dataPagesBlog.status!=200)throw new Error('Не вдалося отримати дані');
  const blogCountPages=dataPagesBlog.res;
  const resBlogUA=Array(blogCountPages).fill(undefined).map((_, idx)=>({
    url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/blog/"+(idx+1),
    lastModified: new Date()
  }))

  const resBlogEN=Array(blogCountPages).fill(undefined).map((_, idx)=>({
    url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/blog/"+(idx+1),
    lastModified: new Date()
  }))

  const subjects=[
    { subject: 'coursework' },
    { subject: 'thesis' },
    { subject: 'masterthesis' },
    { subject: 'abstract' },
    { subject: 'annotation' },
    { subject: 'businessplan' },
    { subject: 'answerstoquestions' },
    { subject: 'dissertation' },
    { subject: 'homework' },
    { subject: 'onlineexamhelp' },
    { subject: 'essay' },
    { subject: 'problem' },
    { subject: 'essayabstract' },
    { subject: 'internshipreport' },
    { subject: 'casestudy' },
    { subject: 'controlwork' },
    { subject: 'copywriting' },
    { subject: 'drawing' },
    { subject: 'labreport' },
    { subject: 'monograph' },
    { subject: 'motivationletter' },
    { subject: 'increaseuniqueness' },
    { subject: 'translation' },
    { subject: 'presentation' },
    { subject: 'plan' },
    { subject: 'review' },
    { subject: 'article' },
    { subject: 'creativework' },
    { subject: 'theses' },
    { subject: 'tests' },
    { subject: 'practicediary' }
  ];
  
  const allPageUA=Array(31).fill(undefined).map((_, idx)=>(
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/reviews/all/"+(idx+1),
      lastModified: new Date(),
    }
  ));

  const allPageEN=Array(31).fill(undefined).map((_, idx)=>(
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/reviews/all/"+(idx+1),
      lastModified: new Date()
    }
  ));
  const subjectPageUA=subjects.map(x=>(
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+`/ua/reviews/${x.subject}/1`,
      lastModified: new Date()
    }
  ));
  const subjectPageEN=subjects.map(x=>(
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+`/ru/reviews/${x.subject}/1`,
      lastModified: new Date()
    }
  ));
  return [
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/services/1",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/services/1",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/services/2",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/services/2",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/services/3",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/services/3",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/aboutus",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/aboutus",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/academicdictionary",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/academicdictionary",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/performer",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/performer",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/1",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/1",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/2",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/2",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/3",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/3",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/4",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/4",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/5",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/5",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/6",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/6",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/7",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/7",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/8",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/8",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/9",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/9",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/10",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/10",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/11",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/11",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/12",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/12",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/13",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/13",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/14",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/14",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/15",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/15",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/16",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/16",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/17",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/17",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/18",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/18",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/19",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/19",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/20",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/20",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/21",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/21",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ua/worktype/22",
      lastModified: new Date()
    },
    {
      url: (process.env.NEXT_PUBLIC_URL||"https://student-helper.com")+"/ru/worktype/22",
      lastModified: new Date()
    },
    ...allPageUA,...allPageEN,...subjectPageUA,...subjectPageEN,...resBlogUA,...resBlogEN,
      ...sitemapIdBlogUA,...sitemapIdBlogEN
  ]
}

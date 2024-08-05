import React from "react";

export async function generateMetadata({ params }: any) {
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

export default function page() {
  return <div>page</div>;
}

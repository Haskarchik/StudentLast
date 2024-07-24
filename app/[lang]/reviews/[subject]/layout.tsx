export async function generateStaticParams() {
    return [
        { subject: 'all' },
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
      
}

export default function RootLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
        children
    )
  }
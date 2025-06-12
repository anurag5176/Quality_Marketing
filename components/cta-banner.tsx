import Link from "next/link"

interface CtaBannerProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function CtaBanner({ title, subtitle, ctaText, ctaLink }: CtaBannerProps) {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
          <Link
            href={ctaLink}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}

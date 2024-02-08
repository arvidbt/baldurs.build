import { siteConfig } from "@/config/site"

export default function DisclaimerPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-4">
        <div>
          <h1 className="py-2 text-xl font-extrabold">{siteConfig.name}</h1>
          <p className="text-xs">
            <span className="font-semibold">Baldurs.build</span> is not
            affiliated with or endorsed by Larian Studios.
          </p>
          <p className="text-xs">
            <span className="font-semibold">Baldurs.build</span> is a collection
            of hand-crafted top builds for Baldurs Gate 3.
          </p>
        </div>
      </div>
    </section>
  )
}

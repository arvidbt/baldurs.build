import { MetaBuildsScreen } from "@/components/meta-builds"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-4">
        <MetaBuildsScreen />
      </div>
    </section>
  )
}

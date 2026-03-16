export default function Hero() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-5xl font-bold leading-tight">
        Turn search demand into
        <span className="text-purple-500"> predictable revenue</span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl mx-auto">
        We help SaaS and ecommerce brands build growth systems that
        generate qualified pipeline, not just traffic.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-purple-600 px-6 py-3 rounded-lg">
          Book a Call
        </button>

        <button className="border border-gray-700 px-6 py-3 rounded-lg">
          Request Proposal
        </button>
      </div>
    </section>
  )
}
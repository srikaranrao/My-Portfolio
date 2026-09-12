import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6 py-2">
      {/* Bio Paragraphs using template font styling */}
      <section className="space-y-4 text-sm sm:text-base leading-relaxed font-mono">
        <p>
          <strong className="font-bold">Srikaran Rao</strong> is a software engineer with a strong interest in capital markets, quantitative trading, and financial technology. His work focuses on understanding the intersection of software engineering and markets, with experience spanning quantitative research, machine learning, market data, backend systems, and trading infrastructure.
        </p>
        <p>
          His journey into capital markets began during his internship at Dynato Labs, where he explored how quantitative research, machine learning, and market data come together to develop and evaluate trading strategies. Working alongside experienced market practitioners gave him exposure to the research-driven nature of systematic trading and helped him understand how strategies are developed through continuous experimentation, backtesting, and refinement.
        </p>
        <p>
          He later joined Timeline Investments, where his focus shifted from understanding trading strategies to building the technology that supports them. During his time there, he worked on historical backtesting systems, large-scale market data pipelines, and a visual strategy builder, gaining experience in building tools that enable traders and researchers to experiment with and evaluate strategies efficiently.
        </p>
        <p>
          His work at Timeline Investments also expanded into the production fintech ecosystem, where he contributed to integrating broker APIs and KYC services. This experience gave him a broader understanding of how different components—from market data and strategy research to APIs, backend services, and financial workflows—come together to power modern trading platforms.
        </p>
        <p>
          Srikaran is particularly interested in problems where software engineering meets capital markets. He enjoys working with complex datasets, identifying patterns, designing reliable backend systems, and turning trading concepts into practical software that can be used by traders and researchers.
        </p>
        <p>
          His long-term goal is to build scalable trading and execution systems that make strategy research, market analysis, and automated trading more powerful, reliable, and accessible.
        </p>
      </section>
    </div>
  );
}
import Card from "@/components/Card";
import Image from "next/image";
import { data } from "@/utils/data";
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Filter />
      {data.map((job) => (
        <Card
          id={job.id}
          key={job.id}
          logo={job.logo}
          title={job.title}
          pay={job.pay}
          location={job.location}
          skills={job.skills}
          views={job.views}
          applied={job.applied}
        />
      ))}
    </main>
  );
}

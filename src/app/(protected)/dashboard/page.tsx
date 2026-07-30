import { DomainDashboard } from "@/components/domain";

export default function DashboardPage() {
  return (
    <main
      className="mx-auto max-w-6xl px-4 py-8 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0dfcfebaee034953b8b624f96050a900%2F10c9bd137e9544ad8cbae94768acf62b')`,
      }}
    >
      <DomainDashboard />
    </main>
  );
}

import Header from "@/app/components/header";
import { RouteProtector } from "@/app/components/route-protector";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RouteProtector role="ACCUSER">
      <div>
        <Header />
        {children}
      </div>
    </RouteProtector>
  );
}

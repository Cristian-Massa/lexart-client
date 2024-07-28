import Aside from "../../components/common/aside/Aside";
import Header from "../../components/common/header/Header";
import Table from "../../components/products/Table.products";

export default function Products() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      <Header />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            x-chunk="dashboard-06-chunk-0"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Products
              </h3>
              <p className="text-sm text-muted-foreground">
                Manage your products and view their sales performance.
              </p>
            </div>
            <div className="p-6">
              <div className="relative w-full overflow-auto">
                <Table />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

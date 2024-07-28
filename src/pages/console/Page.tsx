import Aside from "../../components/common/aside/Aside";
export default function Console() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      <div className="flex min-h-screen items-center justify-center bg-muted px-4 py-12 sm:px-6 lg:px-8"></div>
    </div>
  );
}

import { FieldDemo } from "../ui/FieldDemo"; 

export default function HomeView() {
  return (
    <div className="pb-6 pl-6 overflow-y-auto h-full">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Home</h2>
        <FieldDemo />
      </div>
    </div>
  );
}

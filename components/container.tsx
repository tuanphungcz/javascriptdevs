export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-4 mx-auto md:px-8 max-w-7xl">{children}</div>;
}

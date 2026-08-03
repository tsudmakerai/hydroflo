import "./admin.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <nav className="admin-nav">
        <h1>Гидропоставка | Админка</h1>
        <a href="/">На сайт &rarr;</a>
      </nav>
      <main className="admin-content">{children}</main>
    </div>
  );
}

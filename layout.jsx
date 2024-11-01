import footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <footer />
    </div>
  );
}

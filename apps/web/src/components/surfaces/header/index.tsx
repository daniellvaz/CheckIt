import Logo from "../../../assets/horizontal.svg";

export function Header() {
  return (
    <header className="flex h-48 w-full items-center justify-center p-4">
      <img src={Logo} alt="CheckIt" width={200} />
    </header>
  );
}

interface IProps {
  children: React.ReactNode;
}

const Main = ({ children }: IProps) => <main className="flex-1">{children}</main>;

export default Main;

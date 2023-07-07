type HomeLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const HomeLayout = ({ children, modal }: HomeLayoutProps) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default HomeLayout;

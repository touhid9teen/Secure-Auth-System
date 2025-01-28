import Header from '@renderer/components/Header';
import Wrapper from '@renderer/Layouts/Wrapper';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex justify-between gap-x-7">
      <div className="no-scrollbar flex h-screen w-full flex-col overflow-auto">
        <Header />
        <Wrapper className="pr-7">{children}</Wrapper>
      </div>
    </div>
  );
};

export default MainLayout;

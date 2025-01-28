import loaderIcon from '@renderer/assets/loader.svg';

interface LoaderProps {
  mode?: 'screen' | 'container';
}

const Loader = ({ mode = 'screen' }: LoaderProps) => {
  return (
    <div
      className={`absolute left-0 top-0 flex items-center justify-center ${
        mode === 'screen' ? 'h-screen w-screen' : 'h-full w-full'
      }`}
    >
      <img src={loaderIcon} alt="loading..." className="w-1/3" />
    </div>
  );
};

export default Loader;

import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={370}
    height={520}
    viewBox="0 0 370 520"
    backgroundColor="#eaeff1"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="65" y="263" rx="10" ry="10" width="60" height="37" />
    <rect x="0" y="0" rx="60" ry="60" width="370" height="250" />
    <rect x="0" y="403" rx="10" ry="10" width="370" height="55" />
    <rect x="78" y="369" rx="4" ry="4" width="204" height="26" />
    <rect x="166" y="261" rx="10" ry="10" width="51" height="37" />
    <rect x="256" y="260" rx="10" ry="10" width="45" height="37" />
    <rect x="71" y="307" rx="10" ry="10" width="110" height="40" />
    <rect x="207" y="307" rx="10" ry="10" width="110" height="40" />
    <rect x="10" y="476" rx="10" ry="10" width="106" height="40" />
    <rect x="205" y="473" rx="10" ry="10" width="161" height="40" />
  </ContentLoader>
);

export default Skeleton;

const MiniPage = ({ header, children }: { header: string; children: any }) => {
  return (
    <div className="flex lg:items-end items-center justify-center fade-animation ">
      <div className="flex flex-row items-center lg:mb-8  mb-0 lg:flex-col ">
        {children}
        <h2 className="text-center p-4 text-white">{header}</h2>
      </div>
    </div>
  );
};

export default MiniPage;

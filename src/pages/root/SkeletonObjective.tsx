const SkeltonItem = () => {
  return (
    <div className="ml-4 mt-2">
      <div className="bg-themeGray-2 w-8 h-4"></div>
      {[0, 1].map((index) => {
        return (
          <div key={index} className="mt-2">
            <div className="bg-themeGray-2 ml-4 w-1/2 h-5" />
          </div>
        );
      })}
    </div>
  );
};

export const SkeletonObjective = () => {
  return (
    <div className="border-t border-themeGray-3 mt-2 py-2 animate-pulse">
      <div className="flex my-2 mb-4">
        <div className="bg-themeGray-2 w-12 h-5"></div>
        <div className="bg-themeGray-2 ml-6 w-1/2 h-5"></div>
      </div>
      <SkeltonItem />
      <SkeltonItem />
      <SkeltonItem />
    </div>
  );
};

module.exports = {
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }];
  },
  pageExtensions: ["page.tsx"],
};

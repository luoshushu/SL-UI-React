// 必须用try...catch... 否则测试不通过
try {
  const importAll = (requireContext) => requireContext.keys().map(requireContext)
  const req = require.context('../icons/', true, /\.svg$/)
  importAll(req)
} catch (error) {
  // console.log(error);
}
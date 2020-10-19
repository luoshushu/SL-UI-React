const importAll =  (requireContext )=> requireContext.keys().map(requireContext)
const req = require.context('../icons/', true, /\.svg$/)
try {
  importAll(req)
} catch (error) {
  console.log(error);
}
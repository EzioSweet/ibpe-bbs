/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/main.tsx"
	},
	devServer:{
		proxy: {
			'/trpc': {
				target: 'http://localhost:3000',
				changeOrigin: true,
			},
		},
		historyApiFallback:{
			index:"/"
		}
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.(svg|jpg|jpeg|png|gif|ico)$/,
				type: "asset"
			},
		]
	}
};

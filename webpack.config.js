const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const config = {
	entry: "./src/index.tsx",
	output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
        }),
        new Dotenv()
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				use: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    devServer: {
        historyApiFallback: true,
    }
};

module.exports = (env) => {
	if (env.isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
		config.devtool = "eval-source-map";
	}
	return config;
};

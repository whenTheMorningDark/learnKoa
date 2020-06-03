module.exports = {
	index: async (ctx, next) => {
		await ctx.render("dist/index");
	},
	home: async (ctx, next) => {
		ctx.response.body = "<h1>HOME page222xxczxcz</h1>";
	},
	homeParams: async (ctx, next) => {
		console.log(ctx.params);
		ctx.response.body = "<h1>HOME page /:id/:name</h1>";
	},
	login: async (ctx, next) => {
		await ctx.render("dist/index");
	},
	register: async (ctx, next) => {
		let { name, password } = ctx.request.body;
		console.log(ctx.request.body);
		if (name == "ikcamp" && password == "123456") {
			ctx.response.body = `Hello， ${name}！`;
		} else {
			ctx.response.body = "账号信息错误";
		}
	},
};

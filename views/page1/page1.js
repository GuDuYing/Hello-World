//通过getApp方法拿到全局应用程序对象
const app = getApp();

Page({
	onLoad(){
		const msg = app.foo();
		console.log(msg);
	}
})